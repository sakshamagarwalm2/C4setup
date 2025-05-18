"use client";

import { useState, useEffect } from "react";
import { AdminLayout } from "@/components/layout/admin-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Save, Plus, X, Trash2, Pencil } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface CareerPosition {
  _id?: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

interface CareerContent {
  _id?: string;
  description: string;
  benefits: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export default function AdminCareers() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [positions, setPositions] = useState<CareerPosition[]>([]);
  const [careerContent, setCareerContent] = useState<CareerContent>({
    description: "",
    benefits: [{ title: "", description: "", icon: "" }]
  });
  
  const [isAddingPosition, setIsAddingPosition] = useState(false);
  const [editingPositionId, setEditingPositionId] = useState<string | null>(null);
  const [positionForm, setPositionForm] = useState<CareerPosition>({
    title: "",
    department: "",
    location: "",
    type: "Full-time",
    description: ""
  });

  useEffect(() => {
    fetchCareerContent();
    fetchPositions();
  }, []);

  const fetchCareerContent = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/careers');
      if (!response.ok) {
        throw new Error('Failed to fetch career page content');
      }
      const data = await response.json();
      setCareerContent(data || {
        description: "",
        benefits: [{ title: "", description: "", icon: "" }]
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "An error occurred while loading the career page content. Please refresh and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchPositions = async () => {
    try {
      const response = await fetch('/api/positions');
      if (!response.ok) {
        throw new Error('Failed to fetch positions');
      }
      const data = await response.json();
      setPositions(data || []);
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "An error occurred while loading positions. Please refresh and try again.",
        variant: "destructive",
      });
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCareerContent({ ...careerContent, [name]: value });
  };

  const handleBenefitChange = (index: number, field: 'title' | 'description' | 'icon', value: string) => {
    const updatedBenefits = [...careerContent.benefits];
    updatedBenefits[index][field] = value;
    setCareerContent({ ...careerContent, benefits: updatedBenefits });
  };

  const addBenefit = () => {
    setCareerContent({
      ...careerContent,
      benefits: [...careerContent.benefits, { title: "", description: "", icon: "" }]
    });
  };

  const removeBenefit = (index: number) => {
    const updatedBenefits = careerContent.benefits.filter((_, i) => i !== index);
    setCareerContent({ ...careerContent, benefits: updatedBenefits });
  };

  const handlePositionFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPositionForm({ ...positionForm, [name]: value });
  };

  const resetPositionForm = () => {
    setPositionForm({
      title: "",
      department: "",
      location: "",
      type: "Full-time",
      description: ""
    });
  };

  const startAddingPosition = () => {
    resetPositionForm();
    setIsAddingPosition(true);
    setEditingPositionId(null);
  };

  const startEditingPosition = (position: CareerPosition) => {
    setPositionForm({
      title: position.title,
      department: position.department,
      location: position.location,
      type: position.type,
      description: position.description || ""
    });
    setEditingPositionId(position._id || null);
    setIsAddingPosition(false);
  };

  const cancelPositionForm = () => {
    setIsAddingPosition(false);
    setEditingPositionId(null);
    resetPositionForm();
  };

  const saveContent = async () => {
    try {
      setSaving(true);
      const method = careerContent._id ? 'PUT' : 'POST';
      const url = careerContent._id ? `/api/careers/${careerContent._id}` : '/api/careers';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(careerContent)
      });
      
      if (!response.ok) throw new Error('Failed to save career content');
      
      const updatedContent = await response.json();
      setCareerContent(updatedContent);
      
      toast({
        title: "Success",
        description: "Career page content saved successfully",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to save career page content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  const handlePositionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingPositionId) {
        // Update existing position
        const response = await fetch(`/api/positions/${editingPositionId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(positionForm)
        });
        
        if (!response.ok) throw new Error('Failed to update position');
        
        toast({
          title: "Success",
          description: "Position updated successfully",
        });
      } else {
        // Add new position
        const response = await fetch('/api/positions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(positionForm)
        });
        
        if (!response.ok) throw new Error('Failed to add position');
        
        toast({
          title: "Success",
          description: "Position added successfully",
        });
      }
      
      // Refresh positions list
      fetchPositions();
      cancelPositionForm();
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to save position. Please try again.",
        variant: "destructive",
      });
    }
  };

  const deletePosition = async (id: string | undefined) => {
    if (!id) return;
    if (!confirm('Are you sure you want to delete this position?')) return;
    
    try {
      const response = await fetch(`/api/positions/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Failed to delete position');
      
      toast({
        title: "Success",
        description: "Position deleted successfully",
      });
      
      // Refresh positions list
      fetchPositions();
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to delete position. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <p>Loading career page content...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Manage Careers Page</h1>
        
        {/* Page Content Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Page Content</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="description">
                    Career Page Description
                  </label>
                  <Textarea
                    id="description"
                    name="description"
                    value={careerContent.description}
                    onChange={handleContentChange}
                    rows={4}
                    placeholder="Enter your career page description"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-medium">Benefits</label>
                    <Button type="button" variant="outline" size="sm" onClick={addBenefit}>
                      <Plus className="h-4 w-4 mr-1" /> Add Benefit
                    </Button>
                  </div>
                  
                  {careerContent.benefits.map((benefit, index) => (
                    <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 p-3 border rounded-md">
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor={`benefit-title-${index}`}>
                          Title
                        </label>
                        <Input
                          id={`benefit-title-${index}`}
                          value={benefit.title}
                          onChange={(e) => handleBenefitChange(index, 'title', e.target.value)}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1" htmlFor={`benefit-desc-${index}`}>
                          Description
                        </label>
                        <Input
                          id={`benefit-desc-${index}`}
                          value={benefit.description}
                          onChange={(e) => handleBenefitChange(index, 'description', e.target.value)}
                        />
                      </div>
                      <div className="relative">
                        <label className="block text-sm font-medium mb-1" htmlFor={`benefit-icon-${index}`}>
                          Icon URL
                        </label>
                        <Input
                          id={`benefit-icon-${index}`}
                          value={benefit.icon}
                          onChange={(e) => handleBenefitChange(index, 'icon', e.target.value)}
                        />
                        {careerContent.benefits.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-destructive text-destructive-foreground"
                            onClick={() => removeBenefit(index)}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex justify-end">
                  <Button onClick={saveContent} disabled={saving}>
                    <Save className="mr-2 h-4 w-4" />
                    {saving ? 'Saving...' : 'Save Content'}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Positions Section */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Job Positions</h2>
            {!isAddingPosition && !editingPositionId && (
              <Button onClick={startAddingPosition}>
                <Plus className="mr-2 h-4 w-4" /> Add Position
              </Button>
            )}
          </div>
          
          {/* Position Form */}
          {(isAddingPosition || editingPositionId) && (
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handlePositionSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="title">
                        Position Title
                      </label>
                      <Input
                        id="title"
                        name="title"
                        value={positionForm.title}
                        onChange={handlePositionFormChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="department">
                        Department
                      </label>
                      <Input
                        id="department"
                        name="department"
                        value={positionForm.department}
                        onChange={handlePositionFormChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="location">
                        Location
                      </label>
                      <Input
                        id="location"
                        name="location"
                        value={positionForm.location}
                        onChange={handlePositionFormChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1" htmlFor="type">
                        Employment Type
                      </label>
                      <Input
                        id="type"
                        name="type"
                        value={positionForm.type}
                        onChange={handlePositionFormChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1" htmlFor="description">
                      Job Description
                    </label>
                    <Textarea
                      id="description"
                      name="description"
                      value={positionForm.description}
                      onChange={handlePositionFormChange}
                      rows={4}
                      required
                    />
                  </div>

                  <div className="flex justify-end space-x-2 pt-4">
                    <Button type="button" variant="outline" onClick={cancelPositionForm}>
                      Cancel
                    </Button>
                    <Button type="submit">
                      <Save className="mr-2 h-4 w-4" />
                      {editingPositionId ? 'Update Position' : 'Add Position'}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          )}

          {/* Positions List */}
          {!isAddingPosition && !editingPositionId && (
            <div className="border rounded-md">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {positions.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                        No positions found. Add your first job position.
                      </TableCell>
                    </TableRow>
                  ) : (
                    positions.map((position) => (
                      <TableRow key={position._id}>
                        <TableCell className="font-medium">{position.title}</TableCell>
                        <TableCell>{position.department}</TableCell>
                        <TableCell>{position.location}</TableCell>
                        <TableCell>{position.type}</TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end space-x-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => startEditingPosition(position)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-destructive"
                              onClick={() => deletePosition(position._id!)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
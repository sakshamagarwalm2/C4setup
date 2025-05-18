"use client";

import { useState, useEffect } from "react";
import { AdminLayout } from "@/components/layout/admin-layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Save } from "lucide-react";

interface AboutContent {
  _id?: string;
  mission: string;
  vision: string;
  teamDescription: string;
}

export default function AdminAbout() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [aboutContent, setAboutContent] = useState<AboutContent>({
    mission: "",
    vision: "",
    teamDescription: ""
  });

  useEffect(() => {
    fetchAboutContent();
  }, []);

  const fetchAboutContent = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/about');
      if (!response.ok) {
        throw new Error('Failed to fetch about page content');
      }
      const data = await response.json();
      setAboutContent(data || {
        mission: "",
        vision: "",
        teamDescription: ""
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "An error occurred while loading the 'About' page content. Please refresh and try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAboutContent({ ...aboutContent, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      setSaving(true);
      const method = aboutContent._id ? 'PUT' : 'POST';
      const url = aboutContent._id ? `/api/about/${aboutContent._id}` : '/api/about';
      
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(aboutContent)
      });
      
      if (!response.ok) throw new Error('Failed to save about content');
      
      const updatedContent = await response.json();
      setAboutContent(updatedContent);
      
      toast({
        title: "Success",
        description: "About page content saved successfully",
      });
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to save about page content. Please try again.",
        variant: "destructive",
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <div className="flex items-center justify-center h-64">
          <p>Loading about page content...</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Manage About Page</h1>
        <p className="text-muted-foreground">
          Update your company's mission, vision, and team information.
        </p>

        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="mission">
                  Mission Statement
                </label>
                <Textarea
                  id="mission"
                  name="mission"
                  value={aboutContent.mission}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Enter your company's mission statement"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="vision">
                  Vision Statement
                </label>
                <Textarea
                  id="vision"
                  name="vision"
                  value={aboutContent.vision}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Enter your company's vision statement"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="teamDescription">
                  Team Description
                </label>
                <Textarea
                  id="teamDescription"
                  name="teamDescription"
                  value={aboutContent.teamDescription}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Describe your team"
                  required
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" disabled={saving}>
                  <Save className="mr-2 h-4 w-4" />
                  {saving ? 'Saving...' : 'Save Changes'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
}
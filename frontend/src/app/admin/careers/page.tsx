"use client";

import { useState, useEffect } from "react";
import { AdminLayout } from "@/components/layout/admin-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2, Save, X } from "lucide-react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";

interface JobPosition {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
}

interface Benefit {
  _id: string;
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}

export default function AdminCareers() {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState<'positions' | 'benefits'>('positions');
  
  // Job Positions State
  const [positions, setPositions] = useState<JobPosition[]>([]);
  const [positionsLoading, setPositionsLoading] = useState(true);
  const [isAddingPosition, setIsAddingPosition] = useState(false);
  const [editingPositionId, setEditingPositionId] = useState<string | null>(null);
  const [positionForm, setPositionForm] = useState({
    title: "",
    department: "",
    location: "",
    type: "",
    description: ""
  });
  
  // Benefits State
  const [benefits, setBenefits] = useState<Benefit[]>([]);
  const [benefitsLoading, setBenefitsLoading] = useState(true);
  const [isAddingBenefit, setIsAddingBenefit] = useState(false);
  const [editingBenefitId, setEditingBenefitId] = useState<string | null>(null);
  const [benefitForm, setBenefitForm] = useState({
    title: "",
    description: "",
    icon: "",
    iconAlt: ""
  });

  useEffect(() => {
    fetchPositions();
    fetchBenefits();
  }, []);

  // Job Positions Functions
  const fetchPositions = async () => {
    try {
      setPositionsLoading(true);
      const response = await fetch('/api/careers/positions');
      if (!response.ok) {
        throw new Error('Failed to fetch positions');
      }
      const data = await response.json();
      setPositions(data);
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to load job positions. Please try again.",
        variant: "destructive",
      });
    } finally {
      setPositionsLoading(false);
    }
  };

  const handlePositionInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPositionForm({ ...positionForm, [name]: value });
  };

  const resetPositionForm = () => {
    setPositionForm({
      title: "",
      department: "",
      location: "",
      type: "",
      description: ""
    });
  };

  const startAddingPosition = () => {
    resetPositionForm();
    setIsAddingPosition(true);
    setEditingPositionId(null);
  };

  const startEditingPosition = (position: JobPosition) => {
    setPositionForm({
      title: position.title,
      department: position.department,
      location: position.location,
      type: position.type,
      description: position.description || ""
    });
    setEditingPositionId(position._id);
    setIsAddingPosition(false);
  };

  const cancelPositionForm = () => {
    setIsAddingPosition(false);
    setEditingPositionId(null);
    resetPositionForm();
  };

  const handlePositionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingPositionId) {
        // Update existing position
        const response = await fetch(`/api/careers/positions/${editingPositionId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(positionForm)
        });
        
        if (!response.ok) throw new Error('Failed to update position');
        
        toast({
          title: "Success",
          description: "Job position updated successfully",
        });
      } else {
        // Add new position
        const response = await fetch('/api/careers/positions', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(positionForm)
        });
        
        if (!response.ok) throw new Error('Failed to add position');
        
        toast({
          title: "Success",
          description: "Job position added successfully",
        });
      }
      
      // Refresh positions list
      fetchPositions();
      cancelPositionForm();
    } catch (err) {
      console.error(err);
      toast({
        title: "
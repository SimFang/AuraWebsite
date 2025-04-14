
import React, { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Download, Send, FileText } from "lucide-react";
import { toast } from "@/components/ui/sonner";
import { useLanguage } from "@/contexts/LanguageContext";
import { Form, FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import emailjs from '@emailjs/browser';
import { sendEmail } from '../lib/emailjs';
import { uploadFileForSharing } from '../lib/fileUpload';

// Sample form document URL - replace with your actual document
const FORM_DOCUMENT_URL = "https://www.dropbox.com/scl/fi/5wxa2uos5i63tybo7old9/AuraSolution_IntakeForm_2025.docx?rlkey=dw8kqm2cwstyh28d2go4ypv0t&st=biu1sc7t&dl=0";

const ContactForm = () => {
  const { t } = useLanguage();
  const downloadForm = () => {
    const link = document.createElement('a');
    link.href = FORM_DOCUMENT_URL;
    link.download = "AuraSolution_IntakeForm_2025.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success(t("contact.formDownloaded") || "Form downloaded successfully!");
  };

  return (
    <Card className="border border-gray-200">
      <CardContent className="p-6 space-y-6">
        <div>
          <div className="bg-white p-4 rounded-lg mb-6">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">{t("contact.onlyin2steps") || "Get Your Professional Website for €299"}</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-brand-dark rounded-full p-2 mt-1">
                <FileText className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="font-medium">Step 1: Download Requirements Form</h4>
                <Button 
                  onClick={downloadForm} 
                  variant="outline" 
                  className="flex items-center gap-2 mt-2"
                >
                  <Download size={16} />
                  Download Form
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-brand-dark rounded-full p-2 mt-1">
                <Send className="h-4 w-4 text-white" />
              </div>
              <div>
                <h4 className="font-medium">Step 2: Send Us Your Form</h4>
                <Button 
                  asChild
                  className="flex items-center gap-2 mt-2"
                >
                  <a href="mailto:aurasolutionagency@outlook.com">
                    <Send className="h-4 w-4" />
                    Send to aurasolutionagency@outlook.com
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-600">
            We'll review your requirements and get back to you within 7 days. You only pay after approving the final website.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ContactForm;

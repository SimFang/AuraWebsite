
import React from "react";
import { toast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Mail } from "lucide-react";
import { useLocale } from "@/contexts/LocaleContext";

const ContactForm = () => {
  const { t } = useLocale();

  const handleDownload = () => {
    // Direct link to the Dropbox file with download parameter
    window.open("https://www.dropbox.com/scl/fi/zqvmx2s53lfw97lmoag83/Websora_IntakeForm.docx?rlkey=gihcuthdr5nrycbonta3xso3h&st=0k34yjd3&dl=1", "_blank");
    
    toast({
      title: t("toasts.download.title"),
      description: t("toasts.download.description"),
    });
  };

  return (
    <section id="get-started" className="py-16 bg-gray-50">
      <div className="section-container">
        <div className="text-center mb-12">
          <div className="aura-chip mx-auto mb-4">
            <span>{t("contactForm.getStarted")}</span>
          </div>
          <h2 className="section-title mb-4">{t("contactForm.title")}</h2>
          <p className="section-subtitle mx-auto">
            {t("contactForm.subtitle")}
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-elegant p-6 sm:p-10 text-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t("contactForm.howToStart")}</h3>
              <ol className="text-left list-decimal pl-5 space-y-4">
                <li>
                  <span className="font-medium">{t("contactForm.keywords.download")}</span> {t("contactForm.steps.0")}
                </li>
                <li>
                  <span className="font-medium">{t("contactForm.keywords.fillOut")}</span> {t("contactForm.steps.1")}
                </li>
                <li>
                  <span className="font-medium">{t("contactForm.keywords.email")}</span> {t("contactForm.steps.2")} <a href="mailto:contact.websora@gmail.com" className="text-aura-500 hover:underline">contact.websora@gmail.com</a>
                </li>
              </ol>
            </div>
            
            <button
              type="button"
              onClick={handleDownload}
              className="button-primary inline-flex items-center gap-2"
            >
              <Download size={18} />
              {t("contactForm.downloadButton")}
            </button>
            
            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-600 mb-4">
                {t("contactForm.submitMessage")}
              </p>
              
              <div className="inline-flex items-center gap-2 text-aura-500">
                <Mail size={18} />
                <a href="mailto:contact.websora@gmail.com" className="hover:underline">
                  contact.websora@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">{t("contactForm.questions")}</h3>
          <p className="text-gray-600 mb-6">
            {t("contactForm.questionsMessage")}
          </p>
          <a 
            href="mailto:contact.websora@gmail.com" 
            className="button-secondary inline-flex items-center gap-2"
          >
            <Mail size={18} />
            {t("contactForm.emailUs")} contact.websora@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

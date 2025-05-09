
import { toast as sonnerToast } from "sonner";
import { type ToasterProps } from "sonner";

export { type ToastActionElement } from "@/components/ui/toast";

export type ToastProps = ToasterProps & {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

export function toast(props: ToastProps) {
  return sonnerToast(props.title, {
    description: props.description,
    ...props,
  });
}

export const useToast = () => {
  return {
    toast,
    toasts: [], // This is for compatibility with existing code
  };
};

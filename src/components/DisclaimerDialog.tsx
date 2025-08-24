"use client"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import Image from "next/image";

interface DisclaimerDialogProps {
  onAcknowledge: () => void;
}

export function DisclaimerDialog({ onAcknowledge }: DisclaimerDialogProps) {
  return (
    <AlertDialog open={true}>
      <AlertDialogContent className="bg-secondary border-primary/50">
        <AlertDialogHeader>
           <AlertDialogTitle className="sr-only">Disclaimer</AlertDialogTitle>
          <div className="flex justify-center mb-4">
            <Image src="https://advtalekar.com/static/img/logo.png" alt="Talekar & Associates Logo" width={200} height={40} className="w-48" />
          </div>
          <AlertDialogDescription className="text-center text-muted-foreground pt-4">
            The Bar Council of India restricts advocates from soliciting clients by way of advertisements. This website contains general information for the convenience and use of our clients and is not intended to be any kind of solicitation or source of advertising. By visiting this site, you acknowledge that you have entered this site for general information about Talekar and Associates.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogAction
          onClick={onAcknowledge}
          className="w-full glow-on-hover"
        >
          I Acknowledge
        </AlertDialogAction>
      </AlertDialogContent>
    </AlertDialog>
  )
}

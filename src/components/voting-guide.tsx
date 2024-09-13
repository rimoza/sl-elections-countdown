import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const VotingGuide = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Voting Registration Guide</Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl bg-white text-black">
        <DialogHeader>
          <DialogTitle>How to Register to Vote</DialogTitle>
          <DialogDescription>
            Follow these steps to ensure you&apos;re registered for the
            Somaliland Presidential Election 2024
          </DialogDescription>
        </DialogHeader>
        <ol className="list-decimal pl-5 space-y-2">
          <li>
            Check your eligibility: You must be a Somaliland citizen and at
            least 18 years old.
          </li>
          <li>
            Locate your nearest registration center: Visit the National
            Electoral Commission website for a list of centers.
          </li>
          <li>
            Gather required documents: Bring a valid ID and proof of residence.
          </li>
          <li>
            Visit the registration center: Complete the registration form and
            have your photo taken.
          </li>
          <li>
            Receive your voter card: Keep this safe as you&apos;ll need it on
            election day.
          </li>
          <li>
            Verify your registration: Check the voter rolls when they&apos;re
            published to ensure your information is correct.
          </li>
        </ol>
        <p className="mt-4">
          For more information, visit the official National Electoral Commission
          website.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default VotingGuide;

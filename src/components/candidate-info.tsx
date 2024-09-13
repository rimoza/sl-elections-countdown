import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const candidateData = [
  {
    name: "Muse Bihi Abdi",
    party: "Kulmiye Party",
    bio: "Muse Bihi Abdi is the current president of Somaliland and the candidate of the Kulmiye party. He has been in office since 2017 and is seeking re-election. Bihi is a former military officer and has been involved in Somaliland politics for many years. His campaign focuses on continuing economic development, strengthening international recognition, and maintaining stability in the region.",
  },
  {
    name: "Cabdiraxman Cirro",
    party: "Waddani Party",
    bio: "Cabdiraxman Cirro (also known as Abdirahman Irro) is the candidate of the Waddani Party. He previously served as the Speaker of the House of Representatives of Somaliland from 2005 to 2017. Cirro is known for his experience in parliament and his party's focus on social welfare and democratic reforms. His campaign emphasizes job creation, improving education, and fighting corruption.",
  },
  {
    name: "Faysal Ali Warabe",
    party: "UCID Party",
    bio: "Faysal Ali Warabe is the long-standing chairman and presidential candidate of the UCID (Justice and Welfare) party. He has been a prominent figure in Somaliland politics for decades and has run in previous presidential elections. Warabe is known for his outspoken nature and advocacy for social justice. His campaign platform includes promises of economic reforms, improved healthcare, and stronger foreign relations.",
  },
];

const CandidateInfo = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">View Candidates</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px]">
        <DialogHeader>
          <DialogTitle>Presidential Candidates 2024</DialogTitle>
          <DialogDescription>
            Learn about the candidates for the Somaliland Presidential Election
            2024
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="h-[400px] md:h-[500px] w-full rounded-md border p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {candidateData.map((candidate, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{candidate.name}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="font-semibold mb-2">{candidate.party}</p>
                  <p className="text-sm">{candidate.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default CandidateInfo;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 text-xl text-muted-foreground">
            Learn more about our mission and values
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Our Mission</CardTitle>
            <CardDescription>What drives us forward</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-7">
              We are dedicated to creating innovative solutions that empower users and businesses alike. 
              Our platform combines cutting-edge technology with user-friendly design to deliver exceptional experiences.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Values</CardTitle>
            <CardDescription>The principles that guide us</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-2">
              <li>Innovation in everything we do</li>
              <li>User-centric approach to design</li>
              <li>Commitment to quality and reliability</li>
              <li>Transparency and trust in our relationships</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Our Team</CardTitle>
            <CardDescription>The people behind the scenes</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="leading-7">
              Our diverse team of experts brings together years of experience in technology, 
              design, and customer service. We work collaboratively to ensure that every aspect 
              of our platform meets the highest standards of excellence.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Mail, User, Users, Heart, Check, Loader2 } from "lucide-react";

const rsvpFormSchema = z.object({
  guestName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  attending: z.enum(["yes", "no", "maybe"], {
    required_error: "Please let us know if you're attending",
  }),
  guestCount: z.number().min(1).max(10).default(1),
  mealPreference: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  message: z.string().optional(),
});

type RsvpFormData = z.infer<typeof rsvpFormSchema>;

export function RsvpForm() {
  const { toast } = useToast();
  
  const form = useForm<RsvpFormData>({
    resolver: zodResolver(rsvpFormSchema),
    defaultValues: {
      guestName: "",
      email: "",
      attending: undefined,
      guestCount: 1,
      mealPreference: "",
      dietaryRestrictions: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: RsvpFormData) => {
      const response = await apiRequest("POST", "/api/rsvp", data);
      return response;
    },
    onSuccess: () => {
      toast({
        title: "RSVP Submitted!",
        description: "Thank you for responding. We look forward to celebrating with you!",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your RSVP. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: RsvpFormData) => {
    mutation.mutate(data);
  };

  const attending = form.watch("attending");

  return (
    <section className="py-16 md:py-20 bg-background" id="rsvp" data-testid="rsvp-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            RSVP
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Please let us know if you'll be joining us for this special celebration.
            Kindly respond by December 15, 2025.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="font-serif text-xl flex items-center justify-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                Your Response
              </CardTitle>
              <CardDescription>
                We would be honored to have you celebrate with us
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="guestName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <User className="w-4 h-4" />
                            Full Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your full name"
                              {...field}
                              data-testid="input-guest-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            Email Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="attending"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Will you be attending?</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-wrap gap-4"
                            data-testid="radio-attending"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="yes" id="yes" data-testid="radio-yes" />
                              <Label htmlFor="yes" className="cursor-pointer">Joyfully Accept</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="no" id="no" data-testid="radio-no" />
                              <Label htmlFor="no" className="cursor-pointer">Regretfully Decline</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="maybe" id="maybe" data-testid="radio-maybe" />
                              <Label htmlFor="maybe" className="cursor-pointer">Not Sure Yet</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {attending === "yes" && (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="guestCount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2">
                                <Users className="w-4 h-4" />
                                Number of Guests
                              </FormLabel>
                              <Select
                                onValueChange={(val) => field.onChange(parseInt(val))}
                                value={field.value?.toString()}
                              >
                                <FormControl>
                                  <SelectTrigger data-testid="select-guest-count">
                                    <SelectValue placeholder="Select number of guests" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {[1, 2, 3, 4, 5].map((num) => (
                                    <SelectItem key={num} value={num.toString()}>
                                      {num} {num === 1 ? "guest" : "guests"}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="mealPreference"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Meal Preference</FormLabel>
                              <Select onValueChange={field.onChange} value={field.value}>
                                <FormControl>
                                  <SelectTrigger data-testid="select-meal">
                                    <SelectValue placeholder="Select meal preference" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="standard">Standard Menu</SelectItem>
                                  <SelectItem value="vegetarian">Vegetarian</SelectItem>
                                  <SelectItem value="halal">Halal</SelectItem>
                                  <SelectItem value="seafood">Seafood Only</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="dietaryRestrictions"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Dietary Restrictions or Allergies</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g., gluten-free, nut allergy, etc."
                                {...field}
                                data-testid="input-dietary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </>
                  )}

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message for the Debutante (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Share your wishes or a special message..."
                            className="min-h-[100px] resize-none"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={mutation.isPending}
                    data-testid="button-submit-rsvp"
                  >
                    {mutation.isPending ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Submit RSVP
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

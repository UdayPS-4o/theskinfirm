import AnimatedServicePage from "./AnimatedServicePage";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { Metadata } from "next";
import { getServiceBySlug, getAllServices, getAllLocations, getLocationBySlug } from "@/lib/api";
import { Service, ServiceCategory, Location } from "@/payload-types";

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const services = await getAllServices();
  const locations = await getAllLocations();
  return [
    ...services.map(({ slug }) => ({ service: slug })),
    ...locations.map(({ slug }) => ({ service: slug })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  
  // Try service first
  const service: (Service & { category: ServiceCategory }) | null =
    await getServiceBySlug(slug);
  
  // Try location if service not found
  const location: Location | null = !service ? await getLocationBySlug(slug) : null;
  
  const data = service || location;
  const seoRows = data?.seo?.filter((b: any) => b.blockType === "seo");
  
  if (seoRows?.length) {
    const seo = seoRows[0];
    if (seo) {
      return {
        title: seo.metaTitle,
        description: seo.metaDescription,
        keywords: seo.metaKeywords,
        openGraph: {
          type: "article",
          title: seo.ogTitle || undefined,
          description: seo.ogDescription || undefined,
          images: seo.ogImage
            ? [
                new URL(
                  typeof seo.ogImage === "string"
                    ? seo.ogImage
                    : seo.ogImage.url ||
                      "https://placehold.co/600x400/EEE/31343C"
                ),
              ]
            : undefined,
        },
        alternates: {
          canonical: seo.canonicalUrl,
        },
        robots: {
          index: seo.noIndex || undefined,
          follow: seo.noFollow || undefined,
        },
        twitter: {
          card: seo.twitterCard || "summary",
        },
      };
    }
  }

  return {};
}

const Page = async ({ params }: { params: Promise<{ service: string }> }) => {
  const { service: slug } = await params;
  
  // Try to fetch as service first
  const serviceData: (Service & { category: ServiceCategory }) | null =
    await getServiceBySlug(slug);

  if (serviceData) {
    // Ensure category is populated (not just an ID)
    if (
      typeof serviceData.category === "object" &&
      serviceData.category !== null
    ) {
      return (
        <AnimatedServicePage
          serviceData={
            serviceData as typeof serviceData & {
              category: NonNullable<typeof serviceData.category>;
            }
          }
        />
      );
    }
  }

  // Try to fetch as location
  const locationData: Location | null = await getLocationBySlug(slug);
  
  if (locationData) {
    return (
      <AnimatedServicePage
        serviceData={locationData as any}
        isLocation={true}
      />
    );
  }

  notFound();
};

export default Page;

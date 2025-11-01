import AnimatedServicePage from "./AnimatedServicePage";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { Metadata } from "next";
import { getServiceBySlug, getAllServices } from "@/lib/api";
import { Service, ServiceCategory } from "@/payload-types";

export const revalidate = 3600; // Revalidate every hour

export async function generateStaticParams() {
  const services = await getAllServices();
  return services.map(({ slug }) => ({
    service: slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: slug } = await params;
  const service: (Service & { category: ServiceCategory }) | null =
    await getServiceBySlug(slug);
  const seoRows = service?.seo?.filter((b) => b.blockType === "seo");
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

  notFound();
};

export default Page;

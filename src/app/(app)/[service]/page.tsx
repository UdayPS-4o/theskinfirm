import AnimatedServicePage from "./AnimatedServicePage";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { Metadata } from "next";

export async function generateMetadata(props: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const params = await props.params;
  const slug = params.service;
  const payload = await getPayload({ config: config });
  const result = await payload.find({
    collection: "services",
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 1,
  });
  const service = result.docs.length ? result.docs[0] : null;
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

const Page = async (props: { params: Promise<{ service: string }> }) => {
  const params = await props.params;
  const slug = params.service;
  const payload = await getPayload({ config: config });
  const result = await payload.find({
    collection: "services",
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 1, // This will populate the category relationship
  });

  if (result && result.docs.length > 0) {
    const serviceData = result.docs[0];

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

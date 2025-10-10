import AnimatedServicePage from "./AnimatedServicePage";
import { notFound } from "next/navigation";
import { getPayload } from "payload";
import config from "@payload-config";
import { Metadata } from "next";

// export async function generateStaticParams() {
//   const dataPath = path.join(
//     process.cwd(),
//     "src",
//     "app",
//     "(app)",
//     "services",
//     "[service]",
//     "data.json",
//   );
//   const data2Path = path.join(
//     process.cwd(),
//     "src",
//     "app",
//     "(app)",
//     "services",
//     "[service]",
//     "data_2.json",
//   );

//   const dataContent = await fs.readFile(dataPath, "utf8");
//   const data2Content = await fs.readFile(data2Path, "utf8");

//   const data = JSON.parse(dataContent);
//   const data2 = JSON.parse(data2Content);

//   const slugs1 = Object.keys(data).map((title) =>
//     title.toLowerCase().replace(/\s+/g, "-"),
//   );
//   const slugs2 = Object.keys(data2);
//   const slugs = [...new Set([...slugs1, ...slugs2])];

//   return slugs.map((slug) => ({
//     service: slug,
//   }));
// }

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
  const seoRows = service?.seo;
  if (seoRows) {
    const seo = seoRows[0];
    return {
      title: seo.metaTitle,
      description: seo.ogDescription,
      keywords: seo.metaKeywords,
      openGraph: {
        type: "article",
        title: seo.ogTitle || seo.metaTitle,
        description: seo.ogDescription || seo.metaTitle,
        images: seo.ogImage
          ? [
              new URL(
                typeof seo.ogImage === "string"
                  ? seo.ogImage
                  : seo.ogImage.url || "https://placehold.co/600x400/EEE/31343C"
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

  // const design2Slugs = Object.keys(data2);

  // if (design2Slugs.includes(slug)) {
  //   const serviceData = data2[slug as keyof typeof data2];
  //   return <AcneTreatmentClientPage contentData={serviceData as any} />;
  // }

  // let serviceTitle = slug
  //   .split("-")
  //   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  //   .join(" ");

  // if (slug === "co2-laser-for-skin") {
  //   serviceTitle = "CO2 Laser for Skin";
  // } else if (slug === "qswitch-nd-yag-laser") {
  //   serviceTitle = "QSwitch ND YAG Laser";
  // } else if (slug === "prp-hair-treatment") {
  //   serviceTitle = "PRP Hair Treatment";
  // } else if (slug === "qr678-treatment") {
  //   serviceTitle = "QR678 Treatment";
  // } else {
  //   const titles = Object.keys(data);
  //   const foundTitle = titles.find(
  //     (title) => title.toLowerCase().replace(/\s+/g, "-") === slug,
  //   );
  //   if (foundTitle) {
  //     serviceTitle = foundTitle;
  //   }
  // }

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

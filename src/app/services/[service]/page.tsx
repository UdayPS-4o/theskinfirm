import ServicePage from "./ServicePage";
import serviceSlugMapping from "../../../../service-slug-mapping.json";

const Page = async ({ params }: { params: { service: string } }) => {
  return <ServicePage service={params.service} />;
};

export async function generateStaticParams() {
  const slugs = Object.keys((serviceSlugMapping as any).slugToService);
  return slugs.map((slug) => ({
    service: slug,
  }));
}

export default Page;
import { getPayload } from "payload";
import config from "@payload-config";
import RevalidationAdmin from "./RevalidationAdmin";

export default async function ISRAdminPage() {
  const payload = await getPayload({ config });
  const services = await payload.find({
    collection: "services",
    limit: 1000,
    select: {
      slug: true,
    },
  });

  const locations = await payload.find({
    collection: "locations",
    limit: 1000,
    select: {
      slug: true,
    },
  });

  const servicePages = services.docs.map((service) => `/${service.slug}`);
  const locationPages = locations.docs.map((location) => `/${location.slug}`);
  const allPages = ["/services", ...servicePages, ...locationPages];

  return <RevalidationAdmin pages={allPages} />;
}

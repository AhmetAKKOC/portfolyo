export const projects = [
  {
    title: "Telrics",
    subtitle: "B2B Telecom SaaS Platform",
    href: "https://telrics.com/en",
    // Product description follows the public positioning on telrics.com itself
    // (SMS monetization, SMPP to SS7/SIGTRAN bridging). Nothing here describes
    // internal implementation.
    description:
      "Telrics, operatörlerin ve entegratörlerin SMS trafiğini yönetip gelire dönüştürdüğü bir B2B SaaS platformu. Ürün, SMPP ile SS7/SIGTRAN dünyasını birbirine bağlayarak mevcut telekom altyapısının IP ağları üzerinde çalışmasını sağlıyor. Platformun frontend geliştirmesinde görev aldım.",
    translations: {
      en: {
        subtitle: "B2B Telecom SaaS Platform",
        description:
          "Telrics is a B2B SaaS platform where carriers and integrators manage and monetize SMS traffic. The product bridges SMPP with the SS7/SIGTRAN world, letting existing telecom infrastructure operate over IP networks. I contributed to the platform's frontend development.",
      },
    },
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
  },
  {
    title: "eDevlet Onay Medium",
    subtitle: "E-Devlet Entegrasyonlu Dijital Başvuru Platformu",
    href: "https://edevletonay.medium.com.tr",
    // Left at a deliberately general level: this product publishes no public
    // marketing copy to draw on, so there is no non-internal source to expand from.
    description:
      "E-devlet entegrasyonlu dijital başvuru platformu. Frontend geliştirmesinde görev aldım.",
    translations: {
      en: {
        subtitle: "E-Government Integrated Digital Application Platform",
        description:
          "An e-government integrated digital application platform. I contributed to its frontend development.",
      },
    },
    tags: ["Next.js", "React", "TypeScript", "REST API"],
  },
];

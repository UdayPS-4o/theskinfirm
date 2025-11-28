import { getPayload } from "payload";
import config from "@payload-config";
import { NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export async function GET() {
    const payload = await getPayload({ config });

    try {
        // 1. Check if blog exists
        const existing = await payload.find({
            collection: "blogs",
            where: {
                slug: {
                    equals: "sample1",
                },
            },
        });

        if (existing.docs.length > 0) {
            return NextResponse.json({ message: "Blog sample1 already exists" });
        }

        // 2. Create Media
        // We need to read the file from public/images/services/pigmentation.png
        const filePath = path.join(process.cwd(), "public", "images", "services", "pigmentation.png");

        // Check if file exists
        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ error: "Image file not found" }, { status: 404 });
        }

        const fileBuffer = fs.readFileSync(filePath);

        const media = await payload.create({
            collection: "media",
            data: {
                alt: "Facial Pigmentation Treatment",
            },
            file: {
                data: fileBuffer,
                name: "pigmentation.png",
                mimetype: "image/png",
                size: fileBuffer.length,
            },
        });

        // 3. Create Blog
        const blog = await payload.create({
            collection: "blogs",
            data: {
                slug: "sample1",
                heroTitle: {
                    root: {
                        children: [
                            {
                                children: [
                                    {
                                        detail: 0,
                                        format: 0,
                                        mode: "normal",
                                        style: "",
                                        text: "How to Treat Facial Pigmentation: Dermatologist-Recommended Solutions",
                                        type: "text",
                                        version: 1,
                                    },
                                ],
                                direction: "ltr",
                                format: "",
                                indent: 0,
                                type: "heading",
                                version: 1,
                                tag: "h1",
                            },
                        ],
                        direction: "ltr",
                        format: "",
                        indent: 0,
                        type: "root",
                        version: 1,
                    },
                },
                heroDescription: {
                    root: {
                        children: [
                            {
                                children: [
                                    {
                                        detail: 0,
                                        format: 0,
                                        mode: "normal",
                                        style: "",
                                        text: "Pigmentation may be stubborn, but it isn't permanent. Discover the causes, types, and the most effective dermatologist-approved treatments for radiant, even-toned skin.",
                                        type: "text",
                                        version: 1,
                                    },
                                ],
                                direction: "ltr",
                                format: "",
                                indent: 0,
                                type: "paragraph",
                                version: 1,
                            },
                        ],
                        direction: "ltr",
                        format: "",
                        indent: 0,
                        type: "root",
                        version: 1,
                    },
                },
                heroImage: media.id,
                category: "Skin Care",
                readTime: "5 Min Read",
                publishedDate: new Date().toISOString(),
                tags: [
                    { tag: "Skincare" },
                    { tag: "Pigmentation" },
                    { tag: "Dermatology" },
                    { tag: "Laser Treatment" },
                    { tag: "Beauty" }
                ],
                article: {
                    root: {
                        children: [
                            {
                                children: [
                                    {
                                        detail: 0,
                                        format: 0,
                                        mode: "normal",
                                        style: "",
                                        text: "Those silent middling patches, spots, or shadows across the face are more than just a cosmetic concern; they often affect how we see ourselves in the mirror every morning.",
                                        type: "text",
                                        version: 1,
                                    },
                                ],
                                direction: "ltr",
                                format: "",
                                indent: 0,
                                type: "paragraph",
                                version: 1,
                            },
                            {
                                children: [
                                    {
                                        detail: 0,
                                        format: 0,
                                        mode: "normal",
                                        style: "",
                                        text: "But the good news for you today is : pigmentation is treatable. You no longer have to settle for filters or for full-coverage concealers for your life. At The Skin Firm, we believe in restoring not just your skin tone, but your confidence also with real solutions that begin with understanding your skin’s language first.",
                                        type: "text",
                                        version: 1,
                                    },
                                ],
                                direction: "ltr",
                                format: "",
                                indent: 0,
                                type: "paragraph",
                                version: 1,
                            },
                            {
                                children: [
                                    {
                                        detail: 0,
                                        format: 0,
                                        mode: "normal",
                                        style: "",
                                        text: "Let’s start by exploring how our skilled dermatologists approach facial pigmentation.",
                                        type: "text",
                                        version: 1,
                                    },
                                ],
                                direction: "ltr",
                                format: "",
                                indent: 0,
                                type: "paragraph",
                                version: 1,
                            }
                        ],
                        direction: "ltr",
                        format: "",
                        indent: 0,
                        type: "root",
                        version: 1,
                    },
                },
            },
        });

        return NextResponse.json({ message: "Blog sample1 created", blog });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}

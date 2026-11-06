import { BlogPost, CaseStudyData } from "../types";

export const BlogPosts: BlogPost[] = [
  {
    id: "designing-direct-to-s3-multipart-uploads",
    slug: "designing-direct-to-s3-multipart-uploads",
    title: "Designing Direct-to-S3 Multipart Uploads (Vortex Case Study)",
    summary:
      "Bypassing application servers entirely using presigned parts, checksums, and resilient abort hooks.",
    readTime: "4 min read",
    date: "Apr 18, 2025",
    category: "Performance",
    hasCaseStudy: true,
  },
];

export const SampleCaseStudy: CaseStudyData = {
  title: "Distributed Asset Pipeline & Storage Architecture",
  tagline: "Vortex",
  subtitle:
    "High-throughput idempotent asset ingress pipeline built on direct presigned S3 streams.",
  role: "Lead Systems Architect & Developer",
  duration: "May 2024 — Present",
  skills: [
    "Distributed Systems",
    "Resilient Architecture",
    "Event Streaming",
    "Cloud Infrastructure",
  ],
  tools: ["Node.js", "AWS S3 & STS", "Redis", "TypeScript"],
  highlights: [
    { label: "Payload verification", value: "SHA-256 Checksum" },
    { label: "STS Presigned URL", value: "Issued (TTL 15m)" },
    { label: "ETag verification", value: "Verified (100%)" },
  ],
  badges: ["multipart/v4", "Redis Lock", "Zero Proxy", "Idempotent"],
  background:
    "At Wiseboxs Softworks, managing heavy binary media ingestion through traditional API middleware caused significant memory spikes and proxy saturation. To support high-concurrency client workloads, we architected Vortex—a direct-to-object-storage pipeline eliminating backend bandwidth chokepoints.",
  problem:
    "Streaming megabytes of multimedia payloads across Node.js web server processes bound the event loop and consumed expensive server bandwidth. Network interrupts frequently dropped partial uploads without resume capabilities, requiring clients to restart from byte zero.",
  architecture: [
    "Clients request signed part authorizations via lightweight metadata RPC.",
    "Node service checks permissions and generates presigned S3 upload URLs with SHA-256 constraints.",
    "Browser streams bytes directly to AWS S3 buckets in parallel 5MB chunks.",
    "On completion, an asynchronous Lambda webhook verifies ETags and commits the asset metadata in DynamoDB.",
  ],
  codeSnippet: {
    language: "typescript",
    code: `// Generate idempotent presigned multipart URL with S3 Client
export async function getPresignedChunkUrl(
  assetId: string,
  partNumber: number,
  uploadId: string
): Promise<string> {
  const command = new UploadPartCommand({
    Bucket: process.env.S3_INGRESS_BUCKET!,
    Key: \`uploads/\${assetId}/part-\${partNumber}\`,
    PartNumber: partNumber,
    UploadId: uploadId,
  });

  return getSignedUrl(s3Client, command, { expiresIn: 900 });
}`,
  },
};

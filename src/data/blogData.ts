import { BlogPost, CaseStudyData } from "../types";

export const BlogPosts: BlogPost[] = [
  {
    id: "idempotency-in-distributed-payment-pipelines",
    slug: "idempotency-in-distributed-payment-pipelines",
    title: "Idempotency in Distributed Payment Pipelines",
    summary:
      "Designing zero-bottleneck ingestion pipelines with idempotency keys and Redis mutex locks.",
    readTime: "5 min read",
    date: "Jun 12, 2025",
    category: "Systems Architecture",
  },
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
  {
    id: "self-aligning-systems",
    slug: "self-aligning-systems",
    title: "Self-aligning Systems: Lessons from High-Concurrency Node",
    summary:
      "Event loop micro-benchmarks, cluster auto-recovery, and tuning libuv threadpools under stress.",
    readTime: "7 min read",
    date: "Feb 24, 2025",
    category: "Performance",
  },
  {
    id: "the-north-of-distributed-caching",
    slug: "the-north-of-distributed-caching",
    title: "The North of Distributed Caching",
    summary:
      "Invalidation topologies, cache stampede prevention, and consistent hash rings in multi-region clusters.",
    readTime: "6 min read",
    date: "Nov 14, 2024",
    category: "Systems Architecture",
  },
  {
    id: "complexity-in-mern-stack-microservices",
    slug: "complexity-in-mern-stack-microservices",
    title: "Complexity in MERN Stack Microservices",
    summary:
      "Practical limits of splitting monolithic full-stack codebases and navigating boundary churn.",
    readTime: "5 min read",
    date: "Sep 08, 2024",
    category: "Systems Architecture",
  },
  {
    id: "why-we-chose-redis-locks-over-database-row-locks",
    slug: "why-we-chose-redis-locks-over-database-row-locks",
    title: "Why We Chose Redis Locks Over Database Row Locks",
    summary:
      "Trade-offs in latency and connection pool pressure when orchestrating sensitive inventory balances.",
    readTime: "4 min read",
    date: "Jul 19, 2024",
    category: "Performance",
  },
  {
    id: "event-driven-architectures",
    slug: "event-driven-architectures",
    title: "Event-Driven Architectures for Real-Time Collaboration",
    summary:
      "Leveraging Server-Sent Events (SSE) and Redis Pub/Sub for sub-50ms optimistic state sync.",
    readTime: "5 min read",
    date: "May 10, 2024",
    category: "Frontend & Craft",
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


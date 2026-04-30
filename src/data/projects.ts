export interface Project {
  icon: string;
  title: string;
  badge?: string;
  description: string;
  metrics?: { value: string; label: string }[];
  tags: string[];
  links: { label: string; href: string; featured?: boolean }[];
  featured?: boolean;
  corporate?: boolean;
}

export const projects: Project[] = [
  {
    icon: '🧠',
    title: 'Advanced RAG System v2',
    badge: 'New',
    featured: true,
    description:
      'Upgraded a basic RAG pipeline into a production-grade system using patterns from Netflix and Amazon: hybrid BM25 + dense retrieval with Reciprocal Rank Fusion, LLM query rewriting (+15-25% recall), cross-encoder reranking, and token-by-token streaming. Evaluated with RAGAS across faithfulness, relevancy, and context precision.',
    metrics: [
      { value: '0.92', label: 'Faithfulness' },
      { value: '0.88', label: 'Answer Relevancy' },
      { value: '25', label: 'Tests Passing' },
    ],
    tags: ['LangChain', 'ChromaDB', 'BM25', 'GPT-4o', 'FastAPI', 'RAGAS', 'Docker', 'GitHub Actions'],
    links: [
      { label: 'View Code', href: 'https://github.com/Sumit1673/Medical_RAG_Assistant/tree/main', featured: true },
      { label: 'Blog Post →', href: 'https://medium.com/@sumitvaish' },
    ],
  },
  {
    icon: '🔍',
    title: 'RAG Knowledge Assistant',
    description:
      'A production-grade Retrieval-Augmented Generation system built with LangChain, FAISS, and HuggingFace Sentence Transformers. Ingests multi-format documents (PDF, DOCX, web), chunks intelligently, embeds to a local vector store, and answers questions with source citations. Supports swappable LLM backends (Ollama, OpenAI, Groq).',
    tags: ['LangChain', 'FAISS', 'HuggingFace', 'Ollama', 'FastAPI', 'Python'],
    links: [
      { label: 'View Code', href: 'https://github.com/Sumit1673/knowledge-assistant', featured: true },
    ],
  },
  {
    icon: '👁️',
    title: 'Diabetic Retinopathy Detection',
    description:
      'Deep learning pipeline for automated diabetic retinopathy severity grading from retinal fundus images. Uses a fine-tuned EfficientNet backbone with custom augmentation strategy for handling class imbalance in medical imaging. Achieves clinician-grade accuracy on the APTOS benchmark.',
    tags: ['PyTorch', 'EfficientNet', 'Medical Imaging', 'OpenCV', 'Python'],
    links: [
      { label: 'View Code', href: 'https://github.com/Sumit1673/Diabetic-Retinopathy-Analysis-PyTorch', featured: true },
    ],
  },
  {
    icon: '📋',
    title: 'Insurance Claims Processing (GCP)',
    description:
      'End-to-end ML pipeline for automated insurance claims classification and routing on Google Cloud Platform. Combines Document AI for structured extraction, BERT-based NLP for intent classification, and BigQuery ML for risk scoring. Deployed on GKE with KubeFlow orchestration and real-time monitoring.',
    tags: ['GCP', 'Document AI', 'Vertex AI', 'BigQuery ML', 'KubeFlow', 'GKE'],
    links: [],
    corporate: true,
  },
];

export interface BlogPost {
  icon: string;
  date: string;
  tag: string;
  title: string;
  excerpt: string;
  href: string;
}

export const posts: BlogPost[] = [
  {
    icon: '🔍',
    date: 'Apr 2026',
    tag: 'RAG',
    title: 'From Basic to Production-Grade RAG: Hybrid Search, Reranking & Streaming in Python',
    excerpt: 'How I upgraded a simple vector-search chatbot using hybrid BM25 + dense retrieval, cross-encoder reranking, LLM query rewriting, and streaming SSE — the same patterns used by Netflix and Amazon.',
    href: 'https://medium.com/@sumitvaish',
  },
  {
    icon: '🐍',
    date: 'Dec 19, 2023',
    tag: 'NLP',
    title: 'Triplet Loss: Your Key to Unlocking the Similarities in Your Data Using TF',
    excerpt: 'A deep dive into contrastive learning with Triplet Loss, with hands-on TensorFlow examples for similarity learning tasks.',
    href: 'https://medium.com/@sumitvaish/triplet-loss-your-key-to-unlocking-the-similarities-in-your-data-using-tf-d6918d323785',
  },
  {
    icon: '📝',
    date: 'Dec 16, 2023',
    tag: 'NLP',
    title: 'Demystifying Named Entity Recognition in TensorFlow',
    excerpt: 'Unveiling the magic behind "Who, What, Where" — a practical guide to NER with TensorFlow.',
    href: 'https://medium.com/@sumitvaish/demystifying-named-entity-recognition-in-tensorflow',
  },
  {
    icon: '🚀',
    date: 'Nov 30, 2023',
    tag: 'Productivity',
    title: 'Are you struggling to stay productive?',
    excerpt: "You're not alone. There's a lot going on in the world right now — here's how to stay focused when the days are getting shorter.",
    href: 'https://medium.com/@sumitvaish/are-you-struggling-to-stay-productive',
  },
];

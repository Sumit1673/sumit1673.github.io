export interface SkillGroup {
  label: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    label: 'AI / ML / GenAI',
    skills: [
      'RAG Pipelines', 'Advanced RAG', 'Hybrid Search', 'LangChain',
      'LLM Fine-tuning', 'HuggingFace Transformers', 'BERT / RoBERTa',
      'Sentence Transformers', 'Cross-Encoder Reranking', 'RAGAS Evaluation',
      'Query Rewriting', 'Agentic Workflows', 'Prompt Engineering',
      'Scikit-learn', 'XGBoost / LightGBM',
    ],
  },
  {
    label: 'Deep Learning & Computer Vision',
    skills: ['PyTorch', 'TensorFlow', 'CNNs', 'EfficientNet', 'ResNet', 'OpenCV', 'Image Segmentation', 'Object Detection'],
  },
  {
    label: 'Vector Stores & Search',
    skills: ['ChromaDB', 'FAISS', 'OpenSearch', 'Pinecone', 'BM25 (Sparse Retrieval)', 'Reciprocal Rank Fusion', 'Semantic Search', 'Hybrid Retrieval'],
  },
  {
    label: 'Cloud — GCP',
    skills: ['Vertex AI', 'BigQuery ML', 'GKE', 'KubeFlow', 'Cloud Run', 'Pub/Sub', 'Document AI', 'Cloud Storage'],
  },
  {
    label: 'Cloud — AWS',
    skills: ['SageMaker', 'EKS', 'EC2', 'S3', 'Lambda', 'Airflow (MWAA)', 'Snowflake', 'Kafka'],
  },
  {
    label: 'MLOps & Infrastructure',
    skills: ['Docker', 'Kubernetes', 'MLflow', 'GitHub Actions', 'Jenkins', 'FastAPI', 'Streaming SSE', 'Grafana', 'Prometheus', 'CI/CD for ML', 'Model Monitoring'],
  },
  {
    label: 'Languages & Data',
    skills: ['Python', 'SQL', 'Bash', 'PySpark', 'Pandas / NumPy', 'PostgreSQL', 'Elasticsearch'],
  },
];

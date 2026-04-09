export interface Role {
  title: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
  tags: string[];
}

export const experience: Role[] = [
  {
    title: 'Staff ML Engineer',
    company: 'Fidelity Investments',
    location: 'Boston, MA, USA',
    period: 'Nov 2024 – Dec 2025',
    bullets: [
      'Built a <strong>Multi-Document RAG Pipeline</strong> using LangChain, Sentence Transformers, and ChromaDB — cut analyst research time by <strong>40%</strong> across 500+ financial reports.',
      'Deployed a <strong>Vector ETL pipeline</strong> for multi-source document ingestion, implementing recursive text chunking and automated embedding generation.',
      'Developed end-to-end ETL and ML pipelines for real-time communication error detection using AWS, Airflow, Snowflake, Flask, and AWS EKS.',
      'Established MLOps best practices: MLflow experiment tracking, GitHub Actions CI/CD, automated retraining triggers, Grafana monitoring dashboards.',
    ],
    tags: ['LangChain', 'RAG', 'ChromaDB', 'AWS EKS', 'Kafka', 'XGBoost', 'MLflow', 'FastAPI'],
  },
  {
    title: 'Senior MLOps Developer',
    company: 'Definity Financial',
    location: 'Toronto, ON',
    period: 'May 2024 – Oct 2024',
    bullets: [
      'Designed and maintained scalable ML pipelines on GCP (BigQuery, Vertex AI, Docker, Kubernetes, KubeFlow) serving <strong>14M+</strong> records.',
      'Implemented end-to-end Random Forest pipeline predicting insurance policy lapses, identifying the top 2% at-risk customers and directly impacting business retention strategy.',
      'Designed comprehensive monitoring, alerting, and observability systems for ML model health, maintaining strict production SLAs.',
      'Partnered with product managers to align ML technical requirements with business stakeholder needs in Agile sprints.',
    ],
    tags: ['Vertex AI', 'BigQuery ML', 'GCP', 'NLP', 'Python', 'Scikit-learn'],
  },
  {
    title: 'Senior ML Engineer / Tech Lead',
    company: 'Quantiphi Inc.',
    location: 'Toronto, Canada',
    period: 'Jul 2021 – Mar 2024',
    bullets: [
      '<strong>Inventory Allocation Prediction</strong> (Team Lead, Team of 4): Architected and led end-to-end ML solution for US shipment optimisation, translating business requirements into production systems.',
      '<strong>Insurance Claims Processing</strong> (Team of 12): Implemented a scalable Deep Learning classification system on GCP — TensorFlow, OCR, PyTorch — achieving a <strong>70% speed-up</strong> in claims processing.',
      'Mentored 3 junior engineers; led bi-weekly ML guild sessions on LLM fine-tuning and retrieval-augmented generation.',
      'Delivered 6 production ML systems across healthcare, fintech, and media verticals on GCP and AWS.',
    ],
    tags: ['GCP', 'KubeFlow', 'BERT', 'Document AI', 'Kubernetes', 'Grafana', 'MLOps'],
  },
  {
    title: 'Data Scientist',
    company: 'SalonEveryWhere',
    location: 'Toronto, Canada',
    period: 'Jan 2021 – Jul 2021',
    bullets: [
      'Built a computer vision pipeline for hairstyle classification and recommendation using PyTorch CNNs; integrated with iOS/Android app serving <strong>50K+</strong> users.',
      'Quantized models with TensorFlow Lite for mobile deployment, reducing model size while preserving accuracy.',
    ],
    tags: ['PyTorch', 'Computer Vision', 'Recommendation Systems', 'AWS', 'Quantization'],
  },
  {
    title: 'Computer Vision Engineer',
    company: 'Bosch',
    location: 'Bangalore, India',
    period: 'Aug 2017 – Dec 2018',
    bullets: [
      'Built and trained a person re-identification and tracking system using a CNN-based Siamese Network (PyTorch) with a custom Qt/C++ GUI for real-time inferencing.',
      'Reduced object detection model training time by <strong>22%</strong> without accuracy loss through dataset optimisation (dense-to-sparse) on AWS EC2.',
    ],
    tags: ['TensorFlow', 'Computer Vision', 'CNNs', 'OpenCV', 'Python'],
  },
  {
    title: 'Computer Vision Engineer',
    company: 'LNT Tech Services',
    location: 'Mysore, India',
    period: 'Jan 2015 – Aug 2017',
    bullets: [
      'Led projects in computer vision: medical image stitching (MATLAB, OpenCV, C++) and thermal person detection on Raspberry Pi at <strong>82% accuracy</strong>.',
      'Developed 3-class object detection using transfer learning (VGG16) on NVIDIA Jetson-TK1 achieving <strong>96% accuracy</strong>.',
    ],
    tags: ['TensorFlow', 'Computer Vision', 'CNNs', 'OpenCV', 'Python'],
  },
];

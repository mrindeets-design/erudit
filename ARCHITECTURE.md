# Architecture foundation

## Runtime boundaries

- `widget`: browser-only React package. Vite emits one IIFE bundle; the future mount entry owns a Shadow DOM root so host-site CSS does not leak into the assistant.
- `backend`: stateless TypeScript HTTP API. Authentication, rate limiting, observability, retrieval, and model orchestration belong here rather than in the widget.
- `ingestion`: offline or scheduled worker boundary. HTML/PDF extraction and normalization happen before chunking, embeddings, and indexing are added.
- `admin`: separate protected application boundary for content sources, ingestion runs, and operational status.

## Data direction

`admin -> backend/ingestion -> PostgreSQL + pgvector -> backend -> widget`

The database is intentionally an infrastructure decision rather than an implementation in this foundation. PostgreSQL with pgvector keeps document metadata, access controls, chunks, and vectors in one durable system. A hosted vector service can replace it later behind a repository interface.

## Dependency choices

- Express, Helmet, CORS, Zod, and Pino establish a small API/security/validation/logging base.
- Cheerio and pdf-parse cover the initial HTML/PDF extraction boundary.
- React, Vite, and TypeScript are shared by the isolated widget and admin shell.

No scraper, RAG pipeline, API route, or UI has been implemented at this stage.

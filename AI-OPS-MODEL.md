# KiddieSpeech AI Ops Model

## Purpose

Use AI agents to accelerate prioritization, support, safety review, and delivery while keeping production-impacting decisions under explicit approval.

## 1. Agent Roles

### Feedback Prioritization Agent
- clusters parent feedback
- ranks feature demand
- proposes roadmap priority

### Safety Review Agent
- reviews flagged sessions
- groups incident patterns
- drafts mitigation suggestions

### Support Agent
- drafts parent support replies
- suggests next actions

### Content Agent
- drafts lesson packs and multilingual content variants

### Delivery Agent Pattern
- Codex and Claude use approved APIs and repository access to implement prioritized features, tests, and release materials

## 2. Approval Boundaries

### Can Be Automated
- clustering and summarization
- draft responses
- anomaly detection
- backlog suggestions
- report generation

### Must Require Human Approval
- production safety policy changes
- live pricing changes
- provider routing changes affecting costs or experience
- publishing new child-facing content packs
- legal/compliance messaging

## 3. Core Queues

- safety review queue
- provider health queue
- support queue
- feedback and voting queue
- release queue

## 4. Key Metrics

- blocked response rate
- session completion rate
- cost per completed session
- premium conversion
- support resolution time
- vote volume by feature cluster

## 5. Recommended Operating Policy

Use a 90/10 model:
- AI handles 90% of sorting, drafting, summarizing, and recommending
- humans approve the 10% that changes live child experience, legal posture, money flow, or safety rules

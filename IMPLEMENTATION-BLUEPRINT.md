# KiddieSpeech Implementation Blueprint

## 1. Product Direction

KiddieSpeech should launch as a safe, playful speech development platform for families, not as a generic AI chatbot for children.

Recommended MVP message:
- "Interactive speech practice with kid-friendly characters, parent controls, and multilingual support."

## 2. Recommended MVP

### Platforms
- iOS
- Android
- web

### MVP Feature Set
- parent signup and onboarding
- child profile creation
- age and goal-based session setup
- 3 original character companions
- speech practice mode
- story mode
- parent dashboard
- admin console for provider routing
- native feedback voting board
- free and premium subscription gates

## 3. Delivery Phases

### Phase 0 - Foundations
- finalize positioning and claims
- pick stack
- set up repo, environments, CI/CD, secrets handling
- define data model and safety policy

### Phase 1 - Functional MVP
- build auth and profiles
- build child session experience
- build parent controls
- integrate STT, TTS, LLM, moderation
- ship admin provider settings

### Phase 2 - Quality Hardening
- test child safety workflows
- add quotas, fallback modes, and rate limits
- improve analytics and summaries
- tune multilingual quality

### Phase 3 - Launch Readiness
- app store assets
- landing pages
- support flows
- billing validation
- staged release rollout

## 4. Recommended Architecture

### Frontend
- Expo React Native app for iOS and Android
- Next.js web app for parent and admin access

### Backend Services
- API service
- orchestration service
- moderation service
- reporting service
- billing service

### Infrastructure
- Supabase for auth and primary relational data
- Redis for queues and transient session state
- object storage for approved assets and optional audio artifacts
- PostHog for analytics
- Sentry for errors

## 5. Suggested Data Model

### Core Entities
- parents
- child_profiles
- subscriptions
- session_configs
- sessions
- speech_events
- safety_incidents
- feature_votes
- feedback_items
- ai_providers
- routing_rules
- admin_audit_logs

## 6. AI Routing Model

### Free Tier Route
- lower-cost or self-hosted LLM
- lower-cost TTS voice
- capped daily sessions
- reduced personalization depth

### Premium Tier Route
- premium LLM path
- better voice quality
- stronger multilingual handling
- richer reports

### Fallback Order
1. primary provider
2. secondary provider
3. low-cost backup model
4. safe scripted fallback

## 7. Feedback Prioritization and Delivery Loop

1. parents submit feedback and vote on features
2. AI prioritization agent clusters and ranks demand
3. approved priorities enter backlog
4. Codex and Claude implementation workflows build features through approved APIs and repo access
5. QA and release review happen before production rollout

## 8. Safety Stack

### Layers
- input classifier
- allowed-topic and intent guardrails
- policy-bound prompts
- output moderation
- post-session incident review

### Incident Handling
- block unsafe output
- serve calm fallback message
- log incident
- alert parent/admin based on severity

## 9. Admin and Operator Console

### Admin Needs
- provider management
- key status and health checks
- quotas and cost limits
- plan gating
- language toggles
- character/content pack approval

### Operator Needs
- support queue
- safety queue
- feedback queue
- release and experiment controls

## 10. QA Strategy

### Functional QA
- onboarding
- parent controls
- session creation
- subscriptions
- feedback voting

### Safety QA
- adversarial prompt tests
- harmful content tests
- emotional manipulation tests
- transcript and retention checks

### Platform QA
- iOS phones and tablets
- Android phones and tablets
- mobile and desktop web

## 11. Suggested Build Order

1. repo and architecture setup
2. auth and child profile model
3. child conversation shell
4. speech and voice services
5. parent controls
6. admin console
7. billing and plan gating
8. feedback voting
9. analytics and QA hardening

## 12. Risks to Handle Early

- unsafe or misleading child-facing responses
- speech scoring accuracy claims
- copyrighted character misuse
- free-tier cost blowouts
- inconsistent multilingual quality
- over-retention of child-sensitive data

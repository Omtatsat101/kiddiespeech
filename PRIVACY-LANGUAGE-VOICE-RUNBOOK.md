# KiddieSpeech Privacy, Language, and Voice Runbook

## Privacy layer
- field-level encryption is supported in the API through `DATA_ENCRYPTION_KEY`
- transcripts, language corpora, creator voice payloads, and similar sensitive blobs can be stored as encrypted payload metadata
- parent-level privacy preferences are modeled in Supabase

## Language system
- core languages can be fully interactive
- heritage and minority languages can be stored as curated assets first
- Sanskrit and similar language support can use reviewed corpora, pronunciations, chants, stories, and structured teaching prompts in Supabase

## Knowledge storage strategy
- store reviewed language and cultural corpora in:
  - `language_assets`
  - `knowledge_sources`
- keep provenance fields so source quality and ownership stay visible

## Cost reduction strategy
- prefer open-source or cached assets for basic tasks
- use premium providers only where quality gain is obvious
- store reusable language assets and voice metadata in Supabase to avoid repeated expensive generation

## Voice system
- platform voices for default reliability
- premium voices for higher realism
- creator voices through gated submission and approval flow

## Creator voice safety
- require explicit consent records
- moderate all creator submissions
- keep creator voices disabled until approved
- restrict availability by child profile, language, or plan if needed

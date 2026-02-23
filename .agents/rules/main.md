---
trigger: always_on
---

🚀 ICF Core Rules for Anti-Gravity
1️⃣ Absolute Law

No state mutation is allowed outside an Intent pipeline.

If state changes without an Intent, it is a bug.

🧱 Execution Pipeline (Mandatory Order)

Every Intent must execute in this exact sequence:

1. Register
2. Validate
3. Normalize
4. Add Context
5. Authorize
6. Process
7. Emit Result

No stage may be skipped.
No stage may mutate state except Process.

📦 Intent Contract (Required Structure)

Every Intent must define:

type        (string)
payload     (object)
actor       (string)
timestamp   (optional)
metadata    (optional)

Execution logic must be separated into stage functions.

🛑 Validation Rules

Validation must include:

• Structural schema validation
• Business rule validation
• State precondition validation

If validation fails:

→ Stop immediately
→ No side effects
→ No state mutation

Validation must be pure.

🔄 Normalization Rules

Normalization may:

• Apply defaults
• Format values
• Parse numbers
• Canonicalize timestamps

Normalization may NOT:

• Mutate external state
• Perform I/O

Normalization must be deterministic.

🧠 Context Rules

Context stage may inject:

• Actor roles
• Tenant/store IDs
• Inventory snapshot
• Accounting period
• Environmental config

Context must be read-only.

🔐 Authorization Rules

Authorization must verify:

• Actor permissions
• Role validity
• Scope access

Failure must halt execution.

⚙️ Process Rules

Process stage:

• Must run inside atomic transaction
• Must enforce state transition rules
• Must fully rollback on failure
• Must be deterministic

No partial mutation allowed.

📤 Emit Result Rules

Emit Result must return:

success: boolean
data: object
errors: array
events: array
executionTime: number

An immutable audit record must be created.

🔁 State Transition Control

All entities must define explicit valid transitions.

Example:

Draft → Published
Published → Archived

Illegal transitions must fail validation.

🧪 Determinism Requirement

Given:

• Same Intent
• Same Context
• Same System State

The result must be identical.

No randomness.
No hidden side effects.

📁 File Structure Rules

• One Intent per file
• No nested Intents
• Intent names must be verbs
• No business logic in UI
• No direct setters

Examples:

CreateCourseIntent
CompleteStepIntent
UpgradeSubscriptionIntent

Never:

CourseManager
CourseUtils
CourseHandler
🧩 Stage Separation Rules

Each stage must be implemented in separate modules:

validators.js
normalizers.js
contexts.js
authorizers.js
processors.js
emitters.js

No stage logic inside UI or controllers.

🧨 What Is Forbidden

❌ Hidden mutation
❌ Side effects inside validation
❌ Business logic inside components
❌ Direct database writes outside Process
❌ Arbitrary setters
❌ “Helper” functions that mutate state

🧭 Debugging Rule

Never ask:

“What changed this?”

Always ask:

“Which Intent transitioned this state?”

🏗 Scaling Rule

To scale:

• Add new Intents
• Do not increase coupling
• Do not create shared mutation utilities

Complexity must grow by Intent count only.

🧠 AI Code Generation Rules (For Anti-Gravity)

When generating code:

Identify all relevant Intents first

Define state shape separately

Define validation before processing

Separate each stage clearly

Ensure atomic Process logic

Return structured results

Never mutate outside Process

🔒 Atomicity Rule

Every Intent execution must:

• Fully succeed
OR
• Fully fail

No in-between state allowed.

🏁 Final Principle

ICF is:

Behavior-first
Intent-driven
Deterministic
Traceable
Auditable

State is residue.
Intent is architecture.
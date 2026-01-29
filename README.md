## Design Decision: Email-First Consultation Flow

The consultation flow uses mailto: instead of a database-backed backend by design. 
This keeps infrastructure simple, reduces early costs, and avoids premature backend complexity.
For an early-stage product, direct email ensures reliable lead delivery while allowing faster iteration and validation.
The modal and form logic are structured to easily evolve into an API and database solution once scale and requirements justify it.

# Component Suggestion tool

https://vds-ebon.vercel.app

This is my component suggestion tool project, it will take free text input from developers to describe what they want to build, output a list of suggested component and code snippet

For now it support 5 component keyword search (mimic some level of fuzzy input)

1. "signin", "authenticate", "login" -- login
2. "register", "signup" -- signup
3. "modal", "dialog" -- modal
4. "contact" -- contact
5. "table", "chart" -- table

If trying to run this project locally, node version v22.17.1 required
run 'npm install'
run 'npm run dev'

## Approach and technical choices

This is a React-based web application that take natural language descriptions and return suggested components from Visa Product Design System along with generated code snippet.
The core suggestion logic is hardcoded, rule-based keyword matching for simplicity, I use a mapping object to associate Keyword with component groups and match those with user input.

## Extra feature in the component

Animated transitions added (Button hover and click, error message popup, code display screen appear, etc).
Added a switch for theme change, ('visa-dark' and 'visa-light').
Copy function added to copy code snippet.
Code snippet visual demo added.
I use localStorage to implement saved queries feature.

## Assumptions or shortcuts I made

I assume the suggestion logic could be hardcoded, no AI backend needed.
I stored data using localStorage instead of a backend database to simplify the process.
For demo purposes, I limit the return result number.

## What I would improve if given more time

I would host a simple backend with data and authentication to persist user queries, maybe firebase would be a good choice.
Improving suggestion logic with a real AI bot call (ex. ChatGPT api call).
Allow user to edit generated code before copy (for now it's hardcoded jsx file exported).
I would add some unit testing for the project.

## AI usage

AI tool and internet sources are used to help me gain knowledge quickly (for example, motion frame is a library I didn't have experience before).
If I can't solve some error or issue quickly, I would also using AI to investigate the issue more deeply.

---
name: add-place
description: Add a travel place to the travel map with intelligent coordinate lookup, validation, and automatic commit generation
---

# Add Place to Travel Map

Add a place to the interactive travel map at `/travel-map` with intelligent data extraction, coordinate lookup, validation, and commit generation.

## Usage

```
/add-place <place identifier>
```

Where `<place identifier>` can be:

- City name (e.g., "Tokyo")
- City + country (e.g., "Porto, Portugal")
- City + state + country (e.g., "Banff, AB, Canada")
- Landmark name (e.g., "Grand Canyon")
- Leave empty to enter manual mode with prompts

## Behavior

When invoked, this skill will:

### 1. **Parse the Input**

- If a multi-part string is provided (e.g., "Porto, Portugal"), split into name / state / country components
- If a single name is provided (e.g., "Tokyo"), infer what we can and ask for the rest
- If empty: prompt user for each field manually

### 2. **Infer Missing Fields**

Use web search to fill in gaps:

- **Continent**: Infer from country (e.g., Japan → Asia, Italy → Europe, Canada → Americas)
- **Country**: Infer from city if unambiguous (e.g., Tokyo → Japan); ask if ambiguous (e.g., "Springfield" exists in many states)
- **State/Province**: Infer if the city is well-known (e.g., Banff → AB, Canada); ask if ambiguous or if the country doesn't use states
- **Coordinates (lat/lng)**: Look up via web search (e.g., "Tokyo coordinates" → 35.6762, 139.6503). Always verify — never guess
- **Type**: Default to `'visited'`; ask if the user lived there

### 3. **Validate the Entry**

- Confirm coordinates are reasonable for the stated country (e.g., Brazil should have negative lat, USA should have negative lng)
- Check for duplicates: same `name` + same `country` already exists in `travelPlaces`
- Alert if duplicate is found and ask if user wants to continue
- Validate required fields are present: `name`, `continent`, `country`, `type`, `lat`, `lng`
- Validate `type` is `'visited'` or `'lived'`
- Validate `lat` is between -90 and 90, `lng` is between -180 and 180
- If `pinColor` is provided, validate it's a valid hex color (`#RRGGBB`)

### 4. **Format the Entry**

Format following existing conventions in `travelData.ts`:

- Use diacritics for city/state/country names (e.g., São Paulo not Sao Paulo, Goiânia not Goiania, Brasília not Brasilia)
- Use the short form for state when the dataset already uses abbreviations for that country:
  - USA: 2-letter state codes (CA, WA, NV, OR, AZ, UT)
  - Canada: 2-letter province codes (BC, AB, ON, QC, NS)
  - Brazil: 2-letter state codes (SP, GO, RJ, MG, PR, PE, SC, DF, ES)
  - Other countries: full state/province/region name (e.g., Tuscany, Bavaria, Brandenburg)
- Omit `state` field entirely for city-states where state = city name (e.g., Hamburg, Berlin, Bangkok, Budapest, Vatican City)
- Single-line format for short entries, multi-line for entries with `pinColor` or `note`
- Escape single quotes in names (e.g., `Casca D'Anta waterfall` → `Casca D\'Anta waterfall`)

Example formats:

```typescript
// Simple entry (short, single line)
{ name: 'Volterra', continent: 'Europe', country: 'Italy', state: 'Tuscany', type: 'visited', lat: 43.399548, lng: 10.861094 },

// Lived entry with custom pin color (multi-line)
{
    name: 'Goiânia',
    continent: 'Americas',
    country: 'Brazil',
    state: 'GO',
    type: 'lived',
    lat: -16.680723,
    lng: -49.256596,
    pinColor: '#E65100',
},

// Entry with note (multi-line)
{
    name: 'Paris',
    continent: 'Europe',
    country: 'France',
    state: 'Île-de-France',
    type: 'visited',
    lat: 48.8566,
    lng: 2.3522,
    note: 'City of Light',
},
```

### 5. **Show Proposed Changes**

- Display a unified diff showing:
  - The formatted entry to be inserted
  - Where it will be inserted (at the end of `travelPlaces[]`, before the closing `];`)
  - 2-3 lines of context before the insertion point
- Show a summary of all resolved fields and any inferred values

### 6. **Request User Approval**

- Present the diff and ask for explicit confirmation
- Options: "approve", "edit", "cancel"
- If "edit" is selected, allow user to modify any field (name, state, country, type, lat, lng, pinColor, note)

### 7. **Persist and Lint**

- If approved, use the Edit tool to insert the entry into `src/components/travel-map/travelData.ts`
- Insert at the end of the `travelPlaces` array (before the closing `];`)
- Run `npm run lint` to ensure code formatting is correct (Prettier + ESLint)

### 8. **Commit**

- Create a descriptive commit message:

  ```
  Add travel place: [Name], [Country]

  Type: [visited|lived]
  Coordinates: [lat], [lng]
  ```

- Amend/fixup into the main travel-map commit if working on the same session's squashed commit (ask user)
- Otherwise create a new commit

### 9. **Offer to Push**

- After successful commit, ask if the user wants to push to `main`
- If yes, execute: `git push origin main`
- If the remote has diverged (CI committed PDF updates), pull --rebase first, then push

## Important Notes

- **File Location**: Places are stored in `src/components/travel-map/travelData.ts`
- **Structure**: Single flat array `travelPlaces: TravelPlace[]` (lines ~23-806)
- **Insertion Point**: Always at the **end** of the array (before closing `];`)
- **Continent Values**: Only three are used: `'Europe'`, `'Americas'`, `'Asia'`
- **Country Names**: Match existing conventions in the file (e.g., `'USA'` not `'United States'`, `'UK'` not `'United Kingdom'`)
- **State Conventions**: Check existing entries for the same country to match style (abbreviations vs full names)
- **Coordinate Precision**: Round to 6 decimal places max
- **Linting**: Always run `npm run lint` before committing
- **Diacritics**: Always use correct diacritics — never ASCII-fold names

## Continent Mapping

Use this mapping to infer continent from country:

| Continent | Countries |
|---|---|
| Europe | Italy, Germany, France, Spain, Portugal, Greece, Hungary, Austria, Czech Republic, Netherlands, UK, Vatican City |
| Americas | USA, Canada, Brazil, Chile, Argentina, Panama, Mexico, Cuba |
| Asia | Japan, Thailand, India, China, South Korea, Singapore, Vietnam |

If a country is not in this table, ask the user which continent it belongs to.

## State Convention by Country

Check existing entries in `travelData.ts` for the same country to match abbreviation style:

- **USA**: 2-letter codes (CA, WA, NV, OR, AZ, UT)
- **Canada**: 2-letter province codes (BC, AB, ON, QC, NS)
- **Brazil**: 2-letter state codes (SP, GO, RJ, MG, PR, PE, SC, DF, ES)
- **Germany**: Full state names (Bavaria, Brandenburg, Saxony, etc.)
- **Italy**: Full region names (Tuscany, Lazio)
- **All others**: Full state/province/region names (not abbreviations)
- **City-states** (Hamburg, Berlin, Budapest, Vatican City, Bangkok): Omit `state` field entirely

## Ambiguity Handling

Ask the user when:

1. **City name exists in multiple countries** (e.g., "Springfield" — many US states; "Victoria" — Canada, Hong Kong, Australia, Seychelles)
2. **City name exists in multiple states within the same country** (e.g., "Portland" — OR and ME in USA)
3. **Country cannot be inferred from city name alone** (e.g., "Tripoli" — Libya vs Lebanon)
4. **Continent is ambiguous** (country not in the mapping table above)
5. **Whether the user lived there or just visited** (default: visited)
6. **Whether a state/province is needed** (some countries don't use sub-divisions, or the place is a city-state)

## Error Handling

- If coordinates cannot be found via web search, ask user to provide them manually
- If coordinates don't match the country's hemisphere (e.g., positive lat for Brazil), warn and ask to confirm
- If duplicate is detected, inform user and ask if they want to continue anyway
- If web search fails, fall back to manual entry mode
- If `npm run lint` fails, fix formatting issues and re-run before committing

## Examples

```bash
# Add by city name (will search for country, coordinates, state)
/add-place Tokyo

# Add by city + country
/add-place "Porto, Portugal"

# Add by city + state + country
/add-place "Banff, AB, Canada"

# Add a landmark
/add-place "Grand Canyon"

# Add a place you lived
/add-place "Hamburg" --lived

# Manual mode (prompts for all fields)
/add-place
```

## Workflow Tips

1. **Batch Adding**: If adding multiple places, you can invoke the skill multiple times in succession
2. **Landmarks**: Places like "Grand Canyon" or "Yosemite National Park" have well-known coordinates — search for them directly
3. **Diacritics**: Always verify correct spelling with diacritics (Goiânia, São Paulo, Viña del Mar, Málaga, etc.)
4. **Coordinate Verification**: Sanity-check that lat/lng match the country's geographic position before persisting
5. **State Matching**: Before assigning a state value, check how other entries for the same country format their states

## Related Commands

- `npm run dev` - Preview changes locally at http://localhost:9000/travel-map
- `npm run build` - Build production site
- `npm run lint` - Format code (automatically run by skill)
- `git log` - View commit history

## Testing Checklist

Before considering the skill complete, verify:

- [ ] Can add place by city name only (infers country, continent, coordinates, state)
- [ ] Can add place by city + country
- [ ] Can add place by city + state + country
- [ ] Can add landmark (no state, just country + coordinates)
- [ ] Can add place lived in (type: 'lived')
- [ ] Duplicate detection works (same name + same country)
- [ ] Coordinate validation catches hemisphere errors
- [ ] Diacritics are correct in persisted entry
- [ ] State format matches existing entries for the same country
- [ ] City-states correctly omit the state field
- [ ] Diff shown to user before persisting
- [ ] Linting runs successfully after edit
- [ ] Commit message generated correctly
- [ ] User asked about push after commit

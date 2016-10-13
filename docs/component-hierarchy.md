## Component Heirarchy

**AuthFormContainer**
 - AuthForm

**HomeContainer**
 - Home
 - Sidebar

**BusinessContainer**
 - BusinessHeader
  * BusinessIndex

**ReviewsContainer**
 - ReviewHeader
  + ReviewIndex;

**SearchResultsContainer**
 - Search
 - BusinessIndex

**ReviewIndex**
 - ReviewItem
  + ReviewDetail
   * ReviewTools;
    - BusinessSearch

**NewReviewContainer**
 - NewNote
  - RTETools
  - NewNoteButton

**Search**
  - MapSearch

**NewReview**
 - NewBusinessReview;

**BusinessSearch**
 + AutoSearch
 * AutoSearchResults



## Routes

|Path   | Component   |
|-------|-------------|
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/review/:reviewId" | "ReviewsContainer" |
| "/home/business/:businessId/review/:reviewId" | "BusinessContainer" |
| "/home/search-results" | "SearchResultsContainer"
| "/new-review" | "NewReviewContainer" |
| "/search" | "Search" |
| "/new-tag" | "NewTag" |
| "/tag-search" | "TagSearch" |
| "/business-search" | "BusinessSearch" |

import { pgTable, serial, varchar, json, boolean } from "drizzle-orm/pg-core";

 
export const CourseList = pgTable("courseList", {
  id:           serial("id").primaryKey(),

  courseId:     varchar("courseId",     { length: 64  }).notNull(),
  name:         varchar("name",         { length: 255 }).notNull(),
  category:     varchar("category",     { length: 128 }).notNull(),
  level:        varchar("level",        { length: 32  }).notNull(),

  /** true ⇢ includes video lessons */
  includeVideo: varchar("includeVideo").notNull().default("Yes"),

  courseOutput: json("courseOutput").notNull(),

  createdBy:    varchar("createdBy",    { length: 64  }).notNull(),
  userName:     varchar("username",     { length: 64  }),
  userProfileImage:
                varchar("userProfileImage", { length: 255 }),

    courseBanner: varchar("courseBanner").default("/placeholder.png"),

  publish:      boolean("publish").notNull().default(false),
});
 
export const Chapters = pgTable("chapters", {
  id:        serial("id").primaryKey(),

  courseId:  varchar("courseId",  { length: 64 }).notNull(),
  chapterId: varchar("chapterId", { length: 64 }).notNull(),

  content:   json("content").notNull(),

  /** Array of video IDs (empty by default) */
  videoId:   json("videoId")
              .notNull()
              .$default(() => []),   // ← real array, not "[]"
});

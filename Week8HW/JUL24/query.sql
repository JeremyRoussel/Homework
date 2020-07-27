-- 1. What are all projects that use Javascript?  (None!)

-- SELECT
--     project.name, tech.name
-- FROM
--     project_uses_tech
-- INNER JOIN
--     project ON project.id = project_id
-- INNER JOIN
--     tech ON tech.id = tech_id
-- WHERE
--     tech.id = 3;

--2. What are all technologies used by the Personal Website?  (HTML/CSS)

-- SELECT
--     project.name, tech.name
-- FROM
--     project_uses_tech
-- INNER JOIN
--     project ON project.id = project_id
-- INNER JOIN
--     tech ON tech.id = tech_id
-- WHERE
--     project.id = 4;

--3. Perform a left outer join from the tech table to the project_uses_tech table - which techs has no associated project? (Ruby, JavaScript, Java)

-- SELECT
--     *
-- FROM
--     tech
-- LEFT OUTER JOIN
--     project_uses_tech ON tech.id = tech_id


-- Based on the previous query, get the count of the number of techs used by each project.


-- SELECT
--     project.name, count(project.name)
-- FROM
--     project
-- LEFT OUTER JOIN
--     project_uses_tech ON project.id = project_id
-- GROUP BY
--     project.name


-- Perform a left outer join from the project table to the project_uses_tech table - which projects has no associated tech?

-- SELECT
--     *
-- FROM
--     project
-- LEFT OUTER JOIN
--     project_uses_tech ON project.id = project_id

-- Based on the previous query, get the count of the number of projects that use each tech.

-- SELECT
--     tech.name, count(project_id)
-- FROM
--     tech
-- LEFT OUTER JOIN
--     project_uses_tech ON tech.id = tech_id
-- GROUP BY
--     tech.name

-- List all projects along with each technology used by it. You will need to do a three-way join.

-- SELECT
--     project.name, tech.name
-- FROM
--     project_uses_tech
-- INNER JOIN
--     project ON project.id = project_id
-- INNER JOIN
--     tech ON tech.id = tech_id


-- List all the distinct techs that are used by at least one project.

SELECT
    tech.name
FROM
    tech
INNER JOIN
    project_uses_tech ON tech.id = tech_id
GROUP BY
    tech.name;

-- List all the distinct techs that are not used by any projects.

SELECT
    tech.name
FROM
    tech
RIGHT OUTER JOIN
    project_uses_tech ON tech.id = tech_id
WHERE
    tech.id IS NULL
-- GROUP BY
--     tech.name

-- List all the distinct projects that use at least one tech.
-- List all the distinct projects that use no tech.
-- Order the projects by how many tech it uses.
-- Order the tech by how many projects use it.
-- What is the average number of techs used by a project?
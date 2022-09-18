DROP TYPE IF EXISTS show_type CASCADE;
CREATE TYPE show_type AS ENUM ('tvshow', 'movie');
CREATE TABLE IF NOT EXISTS SHOWS(
    id int NOT NULL,
    name varchar(35) NOT NULL,
    show_type show_type NOT NULL,
    image_path varchar(250),
    created_at bigint NOT NULL,
    updated_at bigint NOT NULL,
    PRIMARY KEY (id)
);
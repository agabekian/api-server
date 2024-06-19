--
-- PostgreSQL database dump
--

-- Dumped from database version 15.6 (Homebrew)
-- Dumped by pg_dump version 15.6 (Homebrew)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Food; Type: TABLE; Schema: public; Owner: armasconi
--

CREATE TABLE public."Food" (
    id integer NOT NULL,
    make character varying(255),
    model character varying(255),
    color character varying(255),
    price integer,
    type public."enum_Food_type",
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


ALTER TABLE public."Food" OWNER TO armasconi;

--
-- Name: Food_id_seq; Type: SEQUENCE; Schema: public; Owner: armasconi
--

CREATE SEQUENCE public."Food_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."Food_id_seq" OWNER TO armasconi;

--
-- Name: Food_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: armasconi
--

ALTER SEQUENCE public."Food_id_seq" OWNED BY public."Food".id;


--
-- Name: Food id; Type: DEFAULT; Schema: public; Owner: armasconi
--

ALTER TABLE ONLY public."Food" ALTER COLUMN id SET DEFAULT nextval('public."Food_id_seq"'::regclass);


--
-- Data for Name: Food; Type: TABLE DATA; Schema: public; Owner: armasconi
--

COPY public."Food" (id, make, model, color, price, type, "createdAt", "updatedAt") FROM stdin;
\.


--
-- Name: Food_id_seq; Type: SEQUENCE SET; Schema: public; Owner: armasconi
--

SELECT pg_catalog.setval('public."Food_id_seq"', 1, false);


--
-- Name: Food Food_pkey; Type: CONSTRAINT; Schema: public; Owner: armasconi
--

ALTER TABLE ONLY public."Food"
    ADD CONSTRAINT "Food_pkey" PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--


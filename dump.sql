--
-- PostgreSQL database dump
--

-- Dumped from database version 15.2
-- Dumped by pg_dump version 15.2

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

--
-- Name: generate_token(); Type: FUNCTION; Schema: public; Owner: -
--

CREATE FUNCTION public.generate_token() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
BEGIN
    NEW.token := gen_random_uuid();
    RETURN NEW;
END;
$$;


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: tokens; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.tokens (
    id integer NOT NULL,
    "userId" integer,
    token uuid DEFAULT gen_random_uuid(),
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: tokens_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.tokens_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: tokens_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.tokens_id_seq OWNED BY public.tokens.id;


--
-- Name: urls; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.urls (
    id integer NOT NULL,
    "shortUrl" character varying(255) NOT NULL,
    url character varying(255) NOT NULL,
    "visitCount" integer DEFAULT 0,
    "userId" integer,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: urls_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.urls_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: urls_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.urls_id_seq OWNED BY public.urls.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(255) NOT NULL,
    email character varying(255) NOT NULL,
    password character varying(255) NOT NULL,
    "createdAt" timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: tokens id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens ALTER COLUMN id SET DEFAULT nextval('public.tokens_id_seq'::regclass);


--
-- Name: urls id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls ALTER COLUMN id SET DEFAULT nextval('public.urls_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: tokens; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.tokens VALUES (3, 2, '6c0412d8-f32e-4445-97ba-6164595d859a', '2023-05-22 15:22:09.241186');
INSERT INTO public.tokens VALUES (5, 4, '35de501c-cd47-46ee-87ed-96a4f3c892bf', '2023-05-22 15:22:55.804835');
INSERT INTO public.tokens VALUES (1, 6, '86e7e179-b59c-4695-8a2b-10af41d97547', '2023-05-22 15:21:53.454225');
INSERT INTO public.tokens VALUES (7, 5, '91f466e7-8d6f-44d6-b72f-59155741d11a', '2023-05-22 15:23:14.371972');
INSERT INTO public.tokens VALUES (8, 3, '0b22351b-291f-4703-a25b-f3f651252ec8', '2023-05-22 15:23:22.172716');
INSERT INTO public.tokens VALUES (2, 1, 'ac8502fb-258d-4856-af6e-a993fc010f54', '2023-05-22 15:22:03.213044');


--
-- Data for Name: urls; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.urls VALUES (1, 'zBa0WOT9', 'https://Felipe.R.com', 0, 2, '2023-05-22 15:25:32.029839');
INSERT INTO public.urls VALUES (2, 'uqnqqu4H', 'https://F.R.com', 0, 2, '2023-05-22 15:25:40.463343');
INSERT INTO public.urls VALUES (3, 'N8xVGmam', 'https://F.asd.com', 0, 2, '2023-05-22 15:25:44.47549');
INSERT INTO public.urls VALUES (4, 'w6SekZYG', 'https://12.asd.com', 0, 2, '2023-05-22 15:25:49.030491');
INSERT INTO public.urls VALUES (5, 'R6TXlX-M', 'https://jj.com', 0, 4, '2023-05-22 15:26:11.121274');
INSERT INTO public.urls VALUES (6, 'tZZc4t6V', 'https://asd.com', 0, 4, '2023-05-22 15:26:15.550113');
INSERT INTO public.urls VALUES (7, 'KTyPS2Ap', 'https://trezentosMil.com', 0, 4, '2023-05-22 15:26:22.592324');
INSERT INTO public.urls VALUES (8, 't1T52m_R', 'https://quarto.com', 0, 6, '2023-05-22 15:26:39.66312');
INSERT INTO public.urls VALUES (9, 'Nhi6ggc6', 'https://arvore.com', 0, 6, '2023-05-22 15:26:43.724162');
INSERT INTO public.urls VALUES (10, 'ZW82UOKM', 'https://chao.com', 0, 6, '2023-05-22 15:26:48.238725');
INSERT INTO public.urls VALUES (11, 'YkYZX5ab', 'https://casino.com', 0, 4, '2023-05-22 15:27:05.393049');
INSERT INTO public.urls VALUES (12, 'qmMZtkHb', 'https://jesus.com', 0, 5, '2023-05-22 15:27:24.347142');
INSERT INTO public.urls VALUES (13, 'LgY_9ySI', 'https://ca.com', 0, 5, '2023-05-22 15:27:31.088441');
INSERT INTO public.urls VALUES (14, 'UIPoORVI', 'https://caa.com', 0, 1, '2023-05-22 15:27:41.782629');
INSERT INTO public.urls VALUES (15, 'ysEt6TAo', 'https://caaaa.com', 0, 1, '2023-05-22 15:27:44.085563');
INSERT INTO public.urls VALUES (16, '3t_2UxJ4', 'https://caaaaaa.com', 0, 1, '2023-05-22 15:27:45.749657');
INSERT INTO public.urls VALUES (17, 'LmyCm3pA', 'https://caaaaaaaa.com', 0, 1, '2023-05-22 15:27:47.116812');
INSERT INTO public.urls VALUES (18, 'Wxcziyfb', 'https://cacom', 0, 3, '2023-05-22 15:27:58.745323');
INSERT INTO public.urls VALUES (19, 'NjoRoUJa', 'https://as', 0, 3, '2023-05-22 15:28:02.68478');
INSERT INTO public.urls VALUES (20, 'YdD7Cz4K', 'https://123', 0, 3, '2023-05-22 15:28:04.83796');
INSERT INTO public.urls VALUES (21, 'EKRBG1ge', 'https://123', 0, 3, '2023-05-22 15:28:05.120172');
INSERT INTO public.urls VALUES (22, 'r22aOoiS', 'https://dasd', 0, 3, '2023-05-22 15:28:07.881171');


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: -
--

INSERT INTO public.users VALUES (1, 'Felipe R', 'Felipe@R.com', '$2b$10$cSZ5MPh8gQ00Vo1KNmoOheZk4L/zNVi8SQnV81hyXLDfpeujehe2e', '2023-05-22 15:20:23.558018');
INSERT INTO public.users VALUES (2, 'Tiago R R', 'Tiago@RR.com', '$2b$10$d9r7lxurgURddfaCPQ3bjuKVkqirXTxtHyIfUiinZbR0wRoUMYAlG', '2023-05-22 15:20:37.856748');
INSERT INTO public.users VALUES (3, 'Emily C R', 'Emily@a.com', '$2b$10$kZ/wPXqtBtRbxsHniJx7fO.0rThZlGSs8CuklRO0i2ZverA3rJGXW', '2023-05-22 15:20:52.114015');
INSERT INTO public.users VALUES (4, 'Driven', 'Driven@school.com', '$2b$10$UZcUwV4JiUN3S6t61D2/h.M0CuSqPKUfhSzkr5nnPbrDiwrd7Wffy', '2023-05-22 15:21:05.784599');
INSERT INTO public.users VALUES (5, 'Size', 'size@123.com', '$2b$10$Hs6exkgOTeZhvpeVF9Lzh.lFN./.ztRmwhHAljVym9DCik9jQqKZO', '2023-05-22 15:21:17.714104');
INSERT INTO public.users VALUES (6, 'Raquel', 'ra@quel.com', '$2b$10$bHIWybDc3.Gr14IZr.IfmuXX.CmXw1GoTO1k1IQaPCz/6AtVfxCku', '2023-05-22 15:21:29.208211');


--
-- Name: tokens_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.tokens_id_seq', 9, true);


--
-- Name: urls_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.urls_id_seq', 22, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('public.users_id_seq', 6, true);


--
-- Name: tokens tokens_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_pkey PRIMARY KEY (id);


--
-- Name: tokens tokens_token_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_token_key UNIQUE (token);


--
-- Name: tokens tokens_user_id_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT tokens_user_id_key UNIQUE ("userId");


--
-- Name: urls urls_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT urls_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: tokens generate_token_trigger; Type: TRIGGER; Schema: public; Owner: -
--

CREATE TRIGGER generate_token_trigger BEFORE INSERT ON public.tokens FOR EACH ROW WHEN ((new.token IS NULL)) EXECUTE FUNCTION public.generate_token();


--
-- Name: tokens tokens_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.tokens
    ADD CONSTRAINT "tokens_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- Name: urls urls_userId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY public.urls
    ADD CONSTRAINT "urls_userId_fkey" FOREIGN KEY ("userId") REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--


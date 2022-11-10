import { useParams } from "react-router";
import { AiFillWindows } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import { useFetch } from "../hooks/useFetch";

// styles
import styles from "./Details.module.css";

import Spinner from "../components/ui/Spinner";

const Details = () => {
  const { id } = useParams();
  const { data: game, isPending, error,} = useFetch(`${process.env.REACT_APP_API_URL}/game?id=${id}`, {
    id,
  });

  return (
    <section className={styles.game_details}>
      {isPending && <Spinner />}
      {error && <p>{error}</p>}
      {game && (
        <article className={styles.article}>
          <img
            className={styles.thumbnail}
            src={game.thumbnail}
            alt={game.title}
          />
          <h1 className={styles.title}>Sobre {game.title}</h1>
          {game.description.split(/(\r\n|\r|\n)/gi).map((paragraph, idx) => (
            <p key={idx} style={{ margin: "20px 0", fontSize: "15px" }}>
              {paragraph}
            </p>
          ))}

          <h3>Información adicional</h3>
          <ul className={styles.info_list}>
            <li>
              <span className="text-muted">Titulo</span>
              <p>{game.title}</p>
            </li>
            <li>
              <span className="text-muted">Desarrollador</span>
              <p>{game.developer}</p>
            </li>
            <li>
              <span className="text-muted">Publicado por</span>
              <p>{game.publisher}</p>
            </li>
            <li>
              <span className="text-muted">Fecha de lanzamiento</span>
              <p>{game.release_date}</p>
            </li>
            <li>
              <span className="text-muted">Genero</span>
              <p>{game.genre}</p>
            </li>
            <li>
              <span className="text-muted">Plataforma</span>
              <div className={styles.platform}>
                {game.platform === "Windows" ? (
                  <AiFillWindows className={styles.platform_icon} />
                ) : (
                  <GoBrowser className={styles.platform_icon} />
                )}
                <p>{game.platform}</p>
              </div>
            </li>
          </ul>

          {game?.screenshots && <h3>Capturas de pantalla {game.title}</h3>}
          {game?.screenshots && (
            <div className={styles.screenshot_grid}>
              {game?.screenshots?.map(({ image }) => (
                <div key={image}>
                  <img src={image} alt="" />
                </div>
              ))}
            </div>
          )}

          {game?.minimum_system_requirements && (
            <h3>Requisitos minimos (Windows)</h3>
          )}
          {game?.minimum_system_requirements && (
            <ul className={styles.info_list}>
              <li>
                <span className="text-muted">Sistema operativo</span>
                <p>{game.minimum_system_requirements.os}</p>
              </li>
              <li>
                <span className="text-muted">Procesador</span>
                <p>{game.minimum_system_requirements.processor}</p>
              </li>
              <li>
                <span className="text-muted">Memoria</span>
                <p>{game.minimum_system_requirements.memory}</p>
              </li>
              <li>
                <span className="text-muted">Graficos</span>
                <p>{game.minimum_system_requirements.graphics}</p>
              </li>
              <li>
                <span className="text-muted">Almacenamiento</span>
                <p>{game.minimum_system_requirements.storage}</p>
              </li>
            </ul>
          )}
        </article>
      )}
    </section>
  );
};

export default Details;

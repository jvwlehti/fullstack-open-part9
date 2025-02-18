import { PartProps } from "../types.ts";

export const Part = (props: PartProps) => {
    const { part } = props;
    switch (part.kind) {
        case "basic":
            return(
                <div>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <p>
                        <em>{part.description}</em>
                    </p>
                </div>
            );

        case "group":
            return(
              <div>
                  <h3>{part.name} {part.exerciseCount}</h3>
                  <p>project exercises {part.groupProjectCount}</p>
              </div>
            );

        case "background":
            return(
                <div>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <p>
                        <em>{part.description}</em>
                    </p>
                    <p>Submit to {part.backgroundMaterial}</p>
                </div>
            );
        case "special":
            return(
                <div>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <p>
                        <em>{part.description}</em>
                    </p>
                    <p>
                        Required skills: {part.requirements.join(", ")}
                    </p>
                </div>
            )
        default:
            return null;
    }
};

export default Part;
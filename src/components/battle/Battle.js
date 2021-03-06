import React, { useRef, useEffect, useState } from "react";
import Navigate, { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { Audio } from "../../audio/Audio";
import useDynamicRefs from "use-dynamic-refs";
import "./Battle.css";

export const Battle = () => {
  const [playerPokemon, setPlayerPokemon] = useState();
  const [enemyPokemon, setEnemyPokemon] = useState();
  const [attackType, setAttackType] = useState("Attack Type");
  const [dialogueQueue, setDialogueQueue] = useState();
  const [getRef, setRef] = useDynamicRefs();
  const playerPokemonRef = useRef();
  const enemyPokemonRef = useRef();
  const enemyHpRef = useRef();
  const playerHpRef = useRef();
  const battleScreenRef = useRef();
  const navigate = useNavigate();

  const getDataFromStorage = (dataKey) => {
    //use JSON.parse()
    return JSON.parse(sessionStorage.getItem(dataKey));
  };

  useEffect(() => {
    // attacking pokemon obj
    setPlayerPokemon(getDataFromStorage("playerPokemon"));
    // defending pokemon obj
    setEnemyPokemon(getDataFromStorage("enemyPokemon"));
  }, []);

  // function for animating each attack using gsap animations
  const animate = (attack) => {
    if (attack.name.toLowerCase() === "tackle") {
      const tl = gsap.timeline();
      tl.to(playerPokemonRef.current, {
        x: -60,
      })
        .to(playerPokemonRef.current, {
          x: +60,
          duration: 0.1,
          onComplete: () => {
            Audio.tackleHit.play();
            // enemy gets hit here
            if (enemyPokemon.hp - attack.damage < 0) {
              gsap.to(enemyHpRef.current, {
                width: 0 + "%",
              });
            } else {
              gsap.to(enemyHpRef.current, {
                width: enemyPokemon.hp - attack.damage + "%",
              });
            }

            // modify pokemon hp on attack hit during the animation
            enemyPokemon.hp = enemyPokemon.hp - attack.damage;
            setEnemyPokemon({ ...enemyPokemon });

            gsap.to(enemyPokemonRef.current, {
              x: 15,
              yoyo: true,
              repeat: 5,
              duration: 0.08,
            });

            gsap.to(enemyPokemonRef.current, {
              opacity: 0,
              repeat: 5,
              yoyo: true,
              duration: 0.08,
              onComplete: () => {
                if (enemyPokemon.hp <= 0) {
                  gsap.to(enemyPokemonRef.current, {
                    autoAlpha: 0,
                  });
                }
              },
            });
          },
        })
        .to(playerPokemonRef.current, {
          x: +0,
        });
    }
    if (attack.name.toLowerCase() === "thunder") {
      const tl = gsap.timeline();
      tl.to(playerPokemonRef.current, {
        x: -0,
        duration: 0,
      })
        .to(playerPokemonRef.current, {
          x: +25,
          duration: 0.15,
          onComplete: () => {
            Audio.thunderInit.play();
            gsap
              .timeline()
              .from(getRef("Thunder").current, {
                y: -250,
                duration: 0.8,
                onComplete: () => {
                  Audio.thunderHit.play();
                  // enemy gets hit here
                  if (enemyPokemon.hp - attack.damage < 0) {
                    gsap.to(enemyHpRef.current, {
                      width: 0 + "%",
                    });
                  } else {
                    gsap.to(enemyHpRef.current, {
                      width: enemyPokemon.hp - attack.damage + "%",
                    });
                  }

                  // modify pokemon hp on attack hit during the animation
                  enemyPokemon.hp = enemyPokemon.hp - attack.damage;
                  setEnemyPokemon({ ...enemyPokemon });
                  gsap.to(enemyPokemonRef.current, {
                    x: 15,
                    yoyo: true,
                    repeat: 5,
                    duration: 0.08,
                  });

                  gsap.to(enemyPokemonRef.current, {
                    opacity: 0,
                    repeat: 5,
                    yoyo: true,
                    duration: 0.08,
                    onComplete: () => {
                      if (enemyPokemon.hp <= 0) {
                        gsap.to(enemyPokemonRef.current, {
                          autoAlpha: 0,
                        });
                      }
                    },
                  });
                },
              })
              .fromTo(
                getRef("Thunder").current,
                {
                  autoAlpha: 1,
                },
                {
                  autoAlpha: 0,
                },
                ">-0.5"
              );
          },
        })

        .to(playerPokemonRef.current, {
          x: +0,
        });
    }
    if (attack.name.toLowerCase() === "earthquake") {
      const tl = gsap.timeline();
      tl.to(playerPokemonRef.current, {
        y: -30,
        duration: 0.25,
      })
        .to(playerPokemonRef.current, {
          y: +30,
          duration: 0.1,
          onComplete: () => {
            Audio.earthquake.play();

            // enemy gets hit here
            if (enemyPokemon.hp - attack.damage < 0) {
              gsap.to(enemyHpRef.current, {
                width: 0 + "%",
              });
            } else {
              gsap.to(enemyHpRef.current, {
                width: enemyPokemon.hp - attack.damage + "%",
              });
            }

            // modify pokemon hp on attack hit during the animation
            enemyPokemon.hp = enemyPokemon.hp - attack.damage;
            setEnemyPokemon({ ...enemyPokemon });

            gsap.to(enemyPokemonRef.current, {
              x: 15,
              yoyo: true,
              repeat: 5,
              duration: 0.08,
            });

            gsap.to(battleScreenRef.current, {
              x: 15,
              yoyo: true,
              repeat: 5,
              duration: 0.08,
            });

            gsap.to(enemyPokemonRef.current, {
              opacity: 0,
              repeat: 5,
              yoyo: true,
              duration: 0.08,
              onComplete: () => {
                if (enemyPokemon.hp <= 0) {
                  gsap.to(enemyPokemonRef.current, {
                    autoAlpha: 0,
                  });
                }
              },
            });
          },
        })
        .to(playerPokemonRef.current, {
          y: +0,
        });
    }
    if (attack.name.toLowerCase() === "fire blast") {
      const tl = gsap.timeline();
      tl.to(playerPokemonRef.current, {
        x: -0,
        duration: 0,
      })
        .to(playerPokemonRef.current, {
          x: +25,
          duration: 0.15,
          onComplete: () => {
            Audio.fireballInit.play();
            gsap
              .timeline()
              .from(getRef("Fire Blast").current, {
                y: 300,
                x: -700,
                duration: 0.8,
                onComplete: () => {
                  Audio.fireballHit.play();
                  // enemy gets hit here
                  if (enemyPokemon.hp - attack.damage < 0) {
                    gsap.to(enemyHpRef.current, {
                      width: 0 + "%",
                    });
                  } else {
                    gsap.to(enemyHpRef.current, {
                      width: enemyPokemon.hp - attack.damage + "%",
                    });
                  }

                  // modify pokemon hp on attack hit during the animation
                  enemyPokemon.hp = enemyPokemon.hp - attack.damage;
                  setEnemyPokemon({ ...enemyPokemon });

                  gsap.to(enemyPokemonRef.current, {
                    x: 15,
                    yoyo: true,
                    repeat: 5,
                    duration: 0.08,
                  });

                  gsap.to(enemyPokemonRef.current, {
                    opacity: 0,
                    repeat: 5,
                    yoyo: true,
                    duration: 0.08,
                    onComplete: () => {
                      if (enemyPokemon.hp <= 0) {
                        gsap.to(enemyPokemonRef.current, {
                          autoAlpha: 0,
                        });
                      }
                    },
                  });
                },
              })
              .fromTo(
                getRef("Fire Blast").current,
                {
                  autoAlpha: 1,
                },
                {
                  autoAlpha: 0,
                },
                "0.65"
              );
          },
        })
        .to(playerPokemonRef.current, {
          x: +0,
        });
    }
  };

  // clears dialogue queue
  const clearDialogue = () => {
    setDialogueQueue();
  };

  // navigate to home page callback function

  const navHome = () => {
    navigate("/");
  };

  // swaps pokemon around and clears dialogue queue
  const turnSwap = () => {
    if (enemyPokemon.hp > 0) {
      setDialogueQueue(`What Will ${enemyPokemon.name} Do?`);
      setPlayerPokemon(enemyPokemon);
      setEnemyPokemon(playerPokemon);
      gsap.to(enemyHpRef.current, {
        width: playerPokemon.hp + "%",
        duration: 0,
      });
      gsap.to(playerHpRef.current, {
        width: enemyPokemon.hp + "%",
        duration: 0,
      });
      setTimeout(clearDialogue, 1500);
    } else {
      setDialogueQueue(
        `${enemyPokemon.name} Has Fainted, ${playerPokemon.name} Wins! `
      );
      setTimeout(navHome, 2500);
    }
  };

  // event handler for clicking pokemon attack
  const handleAttackClicked = (attack) => {
    console.log(attack);
    animate(attack);
    setDialogueQueue(`${playerPokemon.name} Used ${attack.name}!`);
    setTimeout(turnSwap, 2500);
  };

  // event handlers for showing type when move is hovered
  const handleOnHover = (attackType) => {
    setAttackType(attackType);
  };

  const handleOnExit = () => {
    setAttackType("Attack Type");
  };

  return (
    <div className="battle-wrapper" ref={battleScreenRef}>
      <div className="user-pokemon-wrapper">
        <div className="user-pokemon">
          <img ref={playerPokemonRef} src={`${playerPokemon?.backImg}`} />
        </div>
      </div>
      <div className="enemy-pokemon-wrapper">
        <div className="enemy-pokemon">
          <img ref={enemyPokemonRef} src={`${enemyPokemon?.frontImg}`} />
        </div>
        <div className="attack-assets">
          {playerPokemon?.attacks.map((attack) =>
            attack.image ? (
              <img
                className={"asset-image"}
                key={"asset" + attack.id}
                src={attack.image}
                ref={setRef(attack.name)}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className="enemy-health-interface-wrapper">
        <h2>{`${enemyPokemon?.name}`}</h2>
        <div className="enemy-hp-wrapper">
          <div className="enemy-hp-grey"></div>
          <div className="enemy-hp-green" ref={enemyHpRef}></div>
        </div>
      </div>
      <div className="player-health-interface-wrapper">
        <h2>{`${playerPokemon?.name}`}</h2>
        <div className="player-hp-wrapper">
          <div className="player-hp-grey"></div>
          <div className="player-hp-green" ref={playerHpRef}></div>
        </div>
      </div>
      <div className="attack-interface-wrapper">
        {dialogueQueue ? (
          <h2 className="attack-dialogue">{dialogueQueue}</h2>
        ) : (
          <>
            <div className="attack-options">
              {playerPokemon?.attacks.map((attack) => (
                <button
                  key={attack.id}
                  onMouseEnter={() => handleOnHover(attack.type)}
                  onMouseLeave={() => handleOnExit()}
                  onClick={() => handleAttackClicked(attack)}
                >
                  {attack.name}
                </button>
              ))}
            </div>
            <div className="attack-type">
              {attackType === "Attack Type" ? (
                <h1>{attackType}</h1>
              ) : (
                <img
                  src={`/images/pokemon/types/${attackType}.png`}
                  alt={"Attack Type"}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

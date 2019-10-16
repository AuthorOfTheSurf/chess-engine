# chess-engine
A simple text-based chess engine built from scratch without advanced algorithms

### Progress

Overall stage: `Early Development`

| Component                   |                                                                                                                                         Description                                                                                                                                        | Status |
|-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|-------:|
| Parser                      |                                                                                                            Accepts or rejects individual Chess moves given in algebraic notation                                                                                                           |  Doing |
| Intermediate Representation |                                                                                                    Given a syntactically legal chess move, convert this move into a standardized object                                                                                                    |     Do |
| Game engine                 |                                                                                             Enforces game rules and tracks game state. Determines whether or not moves are semantically legal.                                                                                             |     Do |
| Game visualization          | Given a game state, provides a text/emoji visualization of the game state. Must be compatible with common shells/OS's like Mac OS X and bash/zsh.                                                                                                                                          | Do     |
| Playable game in terminal   | A REPL that allows the play of a game of Chess. Uses Game Visualization to show the current state of the game. Instantiates the Game Engine and accepts user input from the terminal in the form of chess moves in algebraic notation. Integrates the components of this project together. | Do     |

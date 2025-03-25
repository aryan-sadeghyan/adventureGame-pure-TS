import Actor from "./actor";
import Room from "./room";
import * as readline from "readline";

export default class Game {
  private map: Room[] = new Array(4);
  private _player!: Actor;
  private _rl: readline.Interface;

  constructor() {
    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.initGame();
    this.startGame();
  }

  private initGame(): void {
    const room0 = new Room("Troll Room", "You see a troll", -1, 2, -1, 1);
    const room1 = new Room(
      "forrest",
      "a very dense and wet forrest with slippery ground",
      -1,
      -1,
      0,
      -1
    );
    const room2 = new Room(
      "Doungen",
      "if u stay to long you will might get lost",
      0,
      -1,
      -1,
      3
    );
    const room3 = new Room(
      "Cave",
      "a dark cave which migh have a tresure",
      -1,
      -1,
      2,
      -1
    );

    this.map[0] = room0;
    this.map[1] = room1;
    this.map[2] = room2;
    this.map[3] = room3;

    this._player = new Actor("Player", "you", room0);
  }

  private startGame(): void {
    this.gameLoop();
  }

  private gameLoop(): void {
    this._rl.question(">", (input) => {
      const output = this.runCommand(input);

      if (input !== "exit") {
        this.gameLoop();
      } else {
        this._rl.close();
      }
    });
  }

  private runCommand(input: string) {
    const s: string = "ok";
    const lowStr: string = input.toLocaleLowerCase().trim();

    if (lowStr !== "exit") {
      if (lowStr === "") {
        console.log(
          "you must enter a Command.check 'Help!' command for Command menu"
        );
      } else {
        const listStr: string[] = lowStr.split(" ");
        this.parseCommand(listStr, input);
      }
      return s;
    }
  }
  private parseCommand(listStr: string[], input: string) {
    const verb: string = listStr[0];
    const commands: string[] = ["n", "s", "w", "e", "exit", "look"];

    // Only allow exact matches
    if (!commands.includes(input)) {
      console.log(`"${input}" is not a known command`);
      return;
    }

    switch (verb) {
      case "n":
        this.movePlayer(this._player.location.N);
        break;
      case "s":
        this.movePlayer(this._player.location.S);
        break;
      case "w":
        this.movePlayer(this._player.location.W);
        break;
      case "e":
        this.movePlayer(this._player.location.E);

        break;
      case "look":
        this.look();
        break;
      default:
        console.log("command not understood");
        break;
    }
  }

  private look(): void {
    console.log(
      `you are in : ${this._player.location.title} and ${this._player.location.description}`
    );
  }

  private movePlayer(dirValue: number) {
    if (dirValue === -1) {
      console.log("You can't go that way");
    } else {
      this._player.location = this.map[dirValue];
    }
  }
}

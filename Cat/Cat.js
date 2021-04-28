import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Cat extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume2", "./Cat/costumes/costume2.svg", {
        x: 47.67898252524472,
        y: 48.15059024107455
      }),
      new Costume("costume1", "./Cat/costumes/costume1.svg", {
        x: 47.678985050489445,
        y: 49.499230353205405
      }),
      new Costume("costume3", "./Cat/costumes/costume3.svg", {
        x: 47.67898252524472,
        y: 49.49923017660271
      }),
      new Costume("costume4", "./Cat/costumes/costume4.svg", {
        x: 47.678985050489445,
        y: 49.499230353205405
      }),
      new Costume("costume5", "./Cat/costumes/costume5.svg", {
        x: 56.69957309576688,
        y: 49.4992305298081
      }),
      new Costume("costume6", "./Cat/costumes/costume6.svg", {
        x: 56.69956422741265,
        y: 12.040518616026247
      }),
      new Costume("costume7", "./Cat/costumes/costume7.svg", {
        x: 58.14989556444962,
        y: 12.040507657996045
      }),
      new Costume("costume8", "./Cat/costumes/costume8.svg", {
        x: 76.84886233810627,
        y: 33.33184906860376
      }),
      new Costume("costume9", "./Cat/costumes/costume9.svg", { x: 240, y: 180 })
    ];

    this.sounds = [
      new Sound("Meow", "./Cat/sounds/Meow.wav"),
      new Sound("Swipe", "./Cat/sounds/Swipe.wav"),
      new Sound(
        "Inflating Balloon-SoundBible",
        "./Cat/sounds/Inflating Balloon-SoundBible.wav"
      ),
      new Sound("Police Siren", "./Cat/sounds/Police Siren.wav"),
      new Sound("pop", "./Cat/sounds/pop.wav"),
      new Sound("Oops", "./Cat/sounds/Oops.wav"),
      new Sound("recording1", "./Cat/sounds/recording1.wav")
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.audioEffects.volume = 94.07144905409199;
  }

  *clicked() {
    if (this.stage.vars.myVariable == 0) {
      this.size += 15;
      if (this.touching(this.sprites[undefined].andClones())) {
        this.stage.vars.myVariable += 1;
      }
      this.costume = "costume2";
      yield* this.startSound("Swipe");
      yield* this.wait(0.1);
      this.costume = "costume1";
    } else {
      if (this.stage.vars.myVariable == 1) {
        this.stage.vars.myVariable += 1;
        yield* this.startSound("Inflating Balloon-SoundBible");
        while (!(this.size < 105)) {
          this.size += -5;
          this.goto(this.random(-5, 5), this.random(-5, 5));
          yield;
        }
        this.goto(0, 0);
      } else {
        if (this.stage.vars.myVariable < 6 && this.stage.vars.myVariable > 1) {
          this.goto(this.random(-240, 240), this.random(-180, 180));
          this.size += 50;
          yield* this.startSound("Meow");
          this.audioEffects.pitch += -50;
          this.stage.vars.myVariable += 1;
        } else {
          if (this.stage.vars.myVariable == 6) {
            this.size += 50;
            yield* this.startSound("Meow");
            this.audioEffects.pitch += -50;
            this.stage.vars.myVariable += 1;
            for (let i = 0; i < 75; i++) {
              this.goto(this.random(-5, 5), this.random(-5, 5));
              yield;
            }
            this.goto(0, 0);
          } else {
            if (this.stage.vars.myVariable == 7) {
              this.stopAllSounds();
              this.audioEffects.pitch = 0;
              yield* this.startSound("Police Siren");
              this.costumeNumber += 1;
              if (this.costumeNumber == 7) {
                this.stage.vars.myVariable += 1;
              }
            } else {
              if (this.stage.vars.myVariable == 8) {
                this.stage.vars.myVariable += 1;
                yield* this.startSound("pop");
                this.costumeNumber += 1;
                yield* this.wait(0.2);
                this.costumeNumber += 1;
                yield* this.wait(2);
                this.costume = "costume1";
                this.size = 10;
                yield* this.wait(0.1);
                for (let i = 0; i < 20; i++) {
                  this.size = (this.size * 8 + 110) / 9;
                  yield;
                }
                this.size = 100;
              } else {
                if (this.stage.vars.myVariable == 9) {
                  yield* this.t343();
                  this.stage.vars.myVariable += 1;
                  yield* this.wait(3);
                  this.size = 300;
                  this.goto(-300, -130);
                  this.size = 100;
                  this.effects.clear();
                  yield* this.glide(1, 0, -130);
                  /* TODO: Implement music_setInstrument */ null;
                  this.stage.vars.shake = 60;
                } else {
                  if (this.stage.vars.myVariable == 10) {
                    /* TODO: Implement music_playNoteForBeats */ null;
                    this.y += 10;
                    this.stage.vars.shake += 3;
                    if (!(this.y < 0)) {
                      this.stage.vars.myVariable += 1;
                      this.audioEffects.pitch = 0;
                      this.stage.vars.shake = 0;
                    }
                  } else {
                    if (this.stage.vars.myVariable == 11) {
                      this.stage.vars.shake += 1;
                      yield* this.startSound("recording1");
                      this.audioEffects.pitch += -5;
                      this.effects.fisheye += 20;
                      this.effects.whirl += 20;
                      if (this.stage.vars.shake == 28) {
                        this.stage.vars.myVariable += 1;
                      }
                    } else {
                      if (this.stage.vars.myVariable == 12) {
                        yield* this.startSound("recording1");
                        for (let i = 0; i < 28; i++) {
                          this.costume = "costume9";
                          this.size += (this.size + Math.sqrt(this.size)) / 10;
                          this.costume = "costume1";
                          yield;
                        }
                        this.stage.costume = "backdrop2";
                        for (let i = 0; i < 20; i++) {
                          this.effects.ghost += 5;
                          yield;
                        }
                        this.stage.vars.score = this.timer;
                        if (this.stage.vars.score < this.stage.vars.Highscore) {
                          this.stage.vars.Highscore = this.stage.vars.score;
                        }
                        this.stage.watchers.Highscore.visible = true;
                        this.stage.watchers.score.visible = true;
                        for (let i = 0; i < 10; i++) {
                          this.size = 400;
                          this.goto(-300, 240);
                          this.effects.clear();
                          this.size = 100;
                          for (let i = 0; i < 400; i++) {
                            this.direction += 2;
                            this.x += 1.3333;
                            this.y += -1;
                            yield;
                          }
                          yield;
                        }
                      } else {
                        null;
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  *whenGreenFlagClicked() {
    this.size = 30;
    this.direction = 90;
    this.goto(0, 0);
    this.costume = "costume1";
    this.audioEffects.pitch = 0;
    this.stage.watchers.Highscore.visible = false;
    this.stage.watchers.score.visible = false;
    this.stage.vars.shake = 0;
    this.stage.vars.myVariable = 0;
    while (true) {
      while (!(this.touching("mouse") && !this.mouse.down)) {
        yield;
      }
      while (!!this.touching("mouse")) {
        if (this.mouse.down) {
          yield* this.clicked();
          while (!!this.mouse.down) {
            yield;
          }
        }
        yield;
      }
      yield;
    }
  }

  *t343() {
    this.stage.vars.shake = 0;
    while (true) {
      this.stage.vars.shake += Math.hypot(
        this.mouse.x - this.x,
        this.mouse.y - this.y
      );
      this.goto(this.mouse.x, this.mouse.y);
      this.stage.vars.shake = this.stage.vars.shake * 0.9;
      this.effects.ghost = this.stage.vars.shake / 10;
      if (this.stage.vars.shake > 1000) {
        yield* this.startSound("Oops");
        return;
      }
      yield;
    }
  }
}

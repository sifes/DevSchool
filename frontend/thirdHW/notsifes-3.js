class Warrior {
    constructor() {
        this.lvl = 1;
        this.curRank = 'Pushover';
        this.curExperience = 100;
        this.curAchievements = [];
    }
    level() {
        return this.lvl;
    }
    getLevel(experience) {
        return Math.floor(experience / 100);
    }
    setLevel(experience) {
        this.lvl = Math.floor(experience / 100) > 100 ? 100 : Math.floor(experience / 100);
    }
    rank() {
        return this.curRank;
    }
    setRank() {
        if (this.lvl >= 100) {
            this.curRank = 'Greatest';
        } else if (this.lvl >= 90) {
            this.curRank = 'Master';
        } else if (this.lvl >= 80) {
            this.curRank = 'Champion';
        } else if (this.lvl >= 70) {
            this.curRank = 'Conqueror';
        } else if (this.lvl >= 60) {
            this.curRank = 'Elite';
        } else if (this.lvl >= 50) {
            this.curRank = 'Sage';
        } else if (this.lvl >= 40) {
            this.curRank = 'Veteran';
        } else if (this.lvl >= 30) {
            this.curRank = 'Warrior';
        } else if (this.lvl >= 20) {
            this.curRank = 'Fighter';
        } else if (this.lvl >= 10) {
            this.curRank = 'Novice';
        } else {
            this.curRank = 'Pushover';
        }
    }
    getRank(level) {
        if (level >= 100) {
            return 'Greatest';
        } else if (level >= 90) {
            return 'Master';
        } else if (level >= 80) {
            return 'Champion';
        } else if (level >= 70) {
            return 'Conqueror';
        } else if (level >= 60) {
            return 'Elite';
        } else if (level >= 50) {
            return 'Sage';
        } else if (level >= 40) {
            return 'Veteran';
        } else if (level >= 30) {
            return 'Warrior';
        } else if (level >= 20) {
            return 'Fighter';
        } else if (level >= 10) {
            return 'Novice';
        } else {
            return 'Pushover';
        }
    }
    experience() {
        return this.curExperience;
    }
    setExperience(experience) {
        this.curExperience = this.curExperience + experience > 10000 ? 10000 : this.curExperience + experience;
    }
    achievements() {
        return this.curAchievements;
    }
    setAchievements(event) {
        this.curAchievements.push(event);
    }
    training(event) {
        if (event[2] > this.lvl) {
            return 'Not strong enough';
        } else {
            this.setAchievements(event[0]);
            this.setExperience(event[1]);
            this.setLevel(this.curExperience);
            this.setRank();
        }
        return event[0];
    }
    battle(enemy_level) {
        if (enemy_level < 1 || enemy_level > 100) {
            this.setExperience(0);
            this.setLevel(this.curExperience);
            this.setRank();
            return 'Invalid level';
        }
        if (enemy_level === this.lvl) {
            this.setExperience(10);
            this.setLevel(this.curExperience);
            this.setRank();
            return "A good fight"
        } else if (enemy_level - this.lvl >= 5 && this.getRank(this.lvl) !== this.getRank(enemy_level)) {
            this.setExperience(0);
            this.setLevel(this.curExperience);
            this.setRank();
            return 'You\'ve been defeated';
        } else if (this.lvl - enemy_level === 1) {
            this.setExperience(5);
            this.setLevel(this.curExperience);
            this.setRank();
            return "A good fight"
        } else if (this.lvl - enemy_level >= 2) {
            this.setExperience(0);
            this.setLevel(this.curExperience);
            this.setRank();
            return "Easy fight"
        } else {
            this.setExperience(20 * (enemy_level - this.lvl) * (enemy_level - this.lvl));
            this.setLevel(this.curExperience);
            this.setRank();
            return "An intense fight"
        }
    }
}

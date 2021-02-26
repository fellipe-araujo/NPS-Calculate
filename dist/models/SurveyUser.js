"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurveyUser = void 0;
var typeorm_1 = require("typeorm");
var uuid_1 = require("uuid");
var Survey_1 = require("./Survey");
var User_1 = require("./User");
var SurveyUser = /** @class */ (function () {
    function SurveyUser() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", String)
    ], SurveyUser.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], SurveyUser.prototype, "user_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return User_1.User; }),
        typeorm_1.JoinColumn({ name: 'user_id' }),
        __metadata("design:type", User_1.User)
    ], SurveyUser.prototype, "user", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], SurveyUser.prototype, "survey_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Survey_1.Survey; }),
        typeorm_1.JoinColumn({ name: 'survey_id' }),
        __metadata("design:type", Survey_1.Survey)
    ], SurveyUser.prototype, "survey", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], SurveyUser.prototype, "value", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], SurveyUser.prototype, "created_at", void 0);
    SurveyUser = __decorate([
        typeorm_1.Entity('surveys_users'),
        __metadata("design:paramtypes", [])
    ], SurveyUser);
    return SurveyUser;
}());
exports.SurveyUser = SurveyUser;

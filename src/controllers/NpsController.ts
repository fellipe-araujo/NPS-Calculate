import { Request, Response } from 'express';
import { getCustomRepository, Not, IsNull } from 'typeorm';
import { SurveyUserRepository } from '../repositories/SurveyUserRepository';

class NpsController {
  async execute(request: Request, response: Response) {
    const { survey_id } = request.params;

    const surveyUserRepository = getCustomRepository(SurveyUserRepository);

    const surveyUser = await surveyUserRepository.find({
      survey_id,
      value: Not(IsNull()),
    });

    const detractor = surveyUser.filter(
      (survey) => Number(survey.value) >= 0 && Number(survey.value) <= 6
    ).length;

    const promoters = surveyUser.filter(
      (survey) => Number(survey.value) >= 9 && Number(survey.value) <= 10
    ).length;

    const passives = surveyUser.filter(
      (survey) => Number(survey.value) >= 7 && Number(survey.value) <= 8
    ).length;

    const totalAnswers = surveyUser.length;

    const calculate = Number(
      (((promoters - detractor) / totalAnswers) * 100).toFixed(2)
    );

    return response.json({
      detractor,
      promoters,
      passives,
      totalAnswers,
      nps: calculate,
    });
  }
}

export { NpsController };

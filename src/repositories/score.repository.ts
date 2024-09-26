import ScoreModel, { IScore } from '../models/score.models'; // Import the correct model and type

class ScoreRepository {
  // Create a new score
  async new(scoreData: Partial<IScore>): Promise<IScore> {
    const score = new ScoreModel(scoreData); // Properly instantiate using the model
    return await score.save(); // Save the document and return the result
  }

  async getAllScores(): Promise<IScore[]> {
    return ScoreModel.find();
  }

  // Update a specific score by ID
  async updateScore(id: string, updateData: Partial<IScore>): Promise<IScore | null> {
    return ScoreModel.findByIdAndUpdate(id, updateData, { new: true }); // Return updated document
  }

  // Delete a specific score by ID
  async deleteScore(id: string): Promise<IScore | null> {
    return ScoreModel.findByIdAndDelete(id); // Return deleted document
  }
}

// Export an instance of the ScoreRepository
export default new ScoreRepository();

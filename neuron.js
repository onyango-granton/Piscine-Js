function neuron(data) {
  const result = { questions: {}, orders: {} };

  data.forEach(item => {
    const [question, response] = item.split(' - ');
    const key = question.toLowerCase().replace(/\s+/g, '_');

    if (question.startsWith('Questions:')) {
      if (!result.questions[key]) {
        result.questions[key] = { question, responses: [] };
      }
        // console.log(key,response)
      result.questions[key].responses.push(response);
    } else if (question.startsWith('Orders:')) {
      if (!result.orders[key]) {
        result.orders[key] = { order: question.replace('Orders:', ''), responses: [] };
      }
      result.orders[key].responses.push(response);
    }
  });
    
    
    Object.entries(result).forEach(([key, value]) => {
        if (key == "questions") {
          Object.entries(value).forEach(([key1, value1]) => {
            value[key1.replace("questions:_", "")] = value[key1];
            delete value[key1];
          });
        } else if (key == "orders") {
          Object.entries(value).forEach(([key1, value1]) => {
            value[key1.replace("orders:_", "").slice(0,-1)] = value[key1];
            delete value[key1];
          });
        }
    })

  return result;
}

console.log(
  neuron([
    "Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system",
    "Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)",
    "Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps",
    "Orders: shutdown! - Response: Yes Sr!",
    "Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.",
  ])
);

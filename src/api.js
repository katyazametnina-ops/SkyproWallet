const BASE_URL = "https://wedev-api.sky.pro/api/transactions";
const USER_URL = "https://wedev-api.sky.pro/api/user";

export const categoryToApi = {
  Еда: "food",
  Транспорт: "transport",
  Жилье: "housing",
  Развлечения: "joy",
  Образование: "education",
  Другое: "others",
};

export const categoryFromApi = {
  food: "Еда",
  transport: "Транспорт",
  housing: "Жилье",
  joy: "Развлечения",
  education: "Образование",
  others: "Другое",
};

export function formatDateFromApi(isoDate) {
  const date = new Date(isoDate);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

export function formatDateToApi(inputDate) {
  const [day, month, year] = inputDate.split(".");
  const fullYear = year.length === 2 ? `20${year}` : year;
  return `${Number(month)}-${Number(day)}-${fullYear}`;
}

export async function loginUser({ login, password }) {
  const response = await fetch(`${USER_URL}/login`, {
    method: "POST",
    body: JSON.stringify({ login, password }),
  });
  if (!response.ok) {
    throw new Error("Неверный логин или пароль");
  }
  return response.json();
}

export async function registerUser({ name, login, password }) {
  const response = await fetch(USER_URL, {
    method: "POST",
    body: JSON.stringify({ name, login, password }),
  });
  if (!response.ok) {
    throw new Error("Пользователь с такой почтой уже существует");
  }
  return response.json();
}

export async function getTransactions(token) {
  const response = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Не удалось загрузить расходы");
  }
  return response.json();
}

export async function addTransaction(
  token,
  { description, sum, category, date },
) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      description,
      sum: Number(sum),
      category: categoryToApi[category] || "others",
      date: formatDateToApi(date),
    }),
  });
  if (!response.ok) {
    throw new Error("Ошибка при добавлении расхода");
  }
  return response.json();
}

export async function deleteTransaction(token, id) {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!response.ok) {
    throw new Error("Ошибка при удалении расхода");
  }
  return response.json();
}

export async function getPeriodTransactions(token, { start, end }) {
  const response = await fetch(`${BASE_URL}/period`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ start, end }),
  });
  if (!response.ok) {
    throw new Error("Ошибка при загрузке аналитики");
  }
  return response.json();
}

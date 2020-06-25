import moment from "moment";

export function handleFormatChartData(data, period) {
  let labels = [];
  let values = [];
  console.log("period", period);

  if (!data.length) return { labels, values };
  if (period === "year") {
    labels = data.map(_data => (_data.year ? _data.year : 0));
    values = data.map(_data => _data.value);
    if (data.length < 2) {
      labels = [data[0].year ? data[0].year - 1 : 0, ...labels];
      values = [0, ...values];
    }
  } else if (period === "month") {
    const defaultMonth = data[0].date
      ? moment(data[0].date, period)
          .subtract(1, "month")
          .format('"MMM-YYYY"')
      : 0;

    labels = data.map(_data =>
      _data.year
        ? moment(Date(`20-${_data.month}-${_data.year}`)).format("MMM-YYYY")
        : 0
    );
    values = data.map(_data => _data.value);
    if (data.length < 2) {
      labels = [defaultMonth, ...labels];
      values = [0, ...values];
    }
  } else {
    const defaultDate = data[0].date
      ? moment(data[0].date, period)
          .subtract(1, `${period}s`)
          .format("LL")
      : 0;

    labels = data.map(_data =>
      _data.date ? moment(_data.date).format("LL") : 0
    );
    values = data.map(_data => _data.value);
    if (data.length < 2) {
      labels = [defaultDate, ...labels];
      values = [0, ...values];
    }
  }
  return { labels, values };
}

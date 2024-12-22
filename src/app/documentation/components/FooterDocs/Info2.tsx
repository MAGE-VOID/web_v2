import React from "react";
import styles from "./Footer.module.css";

const Info2 = () => {
  return (
    <div className={styles.info2}>
      <p>
        <strong>Risk Warning:</strong> Trading foreign exchange (Forex) on
        margin involves high risk and is not suitable for all investors. Past
        performance is not an indication of future results. In this case, too,
        the high degree of leverage can act both against you and in your favor.
      </p>

      <p>
        Before you decide to invest in currencies, you should carefully evaluate
        your investment objectives, experience, financial possibilities and
        willingness to take risks. There is a chance that you will lose your
        initial investment partially or completely. Therefore, you should not
        invest any funds that you cannot afford to lose completely in the worst
        case.
      </p>

      <p>
        <strong>Leverage:</strong> Leverage allows traders, using a relatively
        small amount of money, to take a position that is many times the initial
        investment. This leverage effect can work both in your favor and to your
        detriment. The Forex market opens up the possibility of using this
        leverage effect to a high degree; At the same time, however, it also
        opens up the risk of experiencing large losses.
      </p>

      <p>
        Trade with caution when using leverage on trades or investments. Your
        risk is not particularly limited to the initial investment, but you can
        quickly fall into a negative range in case of strong movements, which
        means that you may be forced to pay much more than your initial bet.
      </p>

      <p>
        <strong>Compliance Notice:</strong> Investors Logics does not direct its
        website and services to any individual in any country in which the use
        of its website and services are prohibited by local laws or regulations.
        It is the user responsibility to ensure that any use of the website or
        services adheres to local laws or regulations. Investors Logics does not
        affirm that the information on its website is suitable for all
        jurisdictions.
      </p>
    </div>
  );
};

export default Info2;

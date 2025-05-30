import React from "react";
import { Trash2, Plus, Calculator, Info, Moon, Sun, ChevronDown, ChevronRight, Settings, FileText } from "lucide-react";

const sapValues = {
  "Coconut Oil": 0.183,
  "Olive Oil": 0.134,
  "Palm Oil": 0.142,
  "Castor Oil": 0.128,
  "Shea Butter": 0.128,
  "Cocoa Butter": 0.137,
  "Avocado Oil": 0.133,
  "Almond Oil": 0.136,
  "Sunflower Oil": 0.136,
  "Canola Oil": 0.124,
  "Grapeseed Oil": 0.135,
  "Hemp Seed Oil": 0.135,
  "Jojoba Oil": 0.069,
  "Rice Bran Oil": 0.128,
  "Soybean Oil": 0.135,
  "Tallow": 0.14,
  "Lard": 0.138,
};

const oilProperties = {
  "Coconut Oil": { hardness: 5, cleansing: 5, conditioning: 1, bubbly: 5, creamy: 1 },
  "Olive Oil": { hardness: 2, cleansing: 1, conditioning: 5, bubbly: 1, creamy: 2 },
  "Palm Oil": { hardness: 4, cleansing: 2, conditioning: 3, bubbly: 2, creamy: 3 },
  "Castor Oil": { hardness: 1, cleansing: 1, conditioning: 4, bubbly: 5, creamy: 2 },
  "Shea Butter": { hardness: 4, cleansing: 1, conditioning: 5, bubbly: 1, creamy: 4 },
  "Cocoa Butter": { hardness: 5, cleansing: 1, conditioning: 4, bubbly: 1, creamy: 3 },
  "Avocado Oil": { hardness: 2, cleansing: 1, conditioning: 5, bubbly: 1, creamy: 2 },
  "Almond Oil": { hardness: 1, cleansing: 1, conditioning: 4, bubbly: 1, creamy: 2 },
  "Sunflower Oil": { hardness: 1, cleansing: 1, conditioning: 4, bubbly: 1, creamy: 2 },
  "Canola Oil": { hardness: 1, cleansing: 1, conditioning: 3, bubbly: 1, creamy: 2 },
  "Grapeseed Oil": { hardness: 1, cleansing: 1, conditioning: 3, bubbly: 1, creamy: 2 },
  "Hemp Seed Oil": { hardness: 1, cleansing: 1, conditioning: 4, bubbly: 1, creamy: 2 },
  "Jojoba Oil": { hardness: 1, cleansing: 1, conditioning: 5, bubbly: 1, creamy: 2 },
  "Rice Bran Oil": { hardness: 2, cleansing: 1, conditioning: 4, bubbly: 1, creamy: 2 },
  "Soybean Oil": { hardness: 1, cleansing: 1, conditioning: 3, bubbly: 1, creamy: 2 },
  "Tallow": { hardness: 5, cleansing: 3, conditioning: 2, bubbly: 2, creamy: 4 },
  "Lard": { hardness: 4, cleansing: 2, conditioning: 3, bubbly: 1, creamy: 4 },
};

const oilDescriptions = {
  "Coconut Oil": "Creates hard bars with excellent cleansing and fluffy lather. Use 15-30% to prevent over-drying.",
  "Olive Oil": "Gentle, moisturizing oil that creates a mild soap. Produces creamy rather than fluffy lather.",
  "Palm Oil": "Creates hard bars with stable lather. Controversial due to environmental concerns.",
  "Castor Oil": "Excellent lather booster and humectant. Use at 5-10% in recipes.",
  "Shea Butter": "Adds luxury, moisture and creaminess. Use at 5-15% in recipes.",
  "Cocoa Butter": "Creates hard, long-lasting bars with a subtle chocolate scent. Use at 5-15%.",
  "Avocado Oil": "Rich in vitamins and moisturizing. Creates a creamy, stable lather.",
  "Almond Oil": "Light, moisturizing oil with little cleansing properties. Good for dry skin.",
  "Sunflower Oil": "Inexpensive, conditioning oil. High in linoleic acid, makes a soft soap.",
  "Canola Oil": "Inexpensive oil that creates a soft, mild soap with stable lather.",
  "Grapeseed Oil": "Light oil that makes a soft bar. Good for combination skin.",
  "Hemp Seed Oil": "Rich in essential fatty acids. Creates a soft bar with stable lather.",
  "Jojoba Oil": "Actually a liquid wax, similar to sebum. Adds stability to lather.",
  "Rice Bran Oil": "Moisturizing oil with antioxidants. Creates a mild, medium-hard bar.",
  "Soybean Oil": "Inexpensive oil that makes a conditioning, soft bar with stable lather.",
  "Tallow": "Traditional soap ingredient that creates a hard, long-lasting bar with creamy lather.",
  "Lard": "Similar to tallow but softer. Creates creamy lather and a mild, hard bar."
};

const essentialOilsData = {
  "Lavender": { 
    maxUsage: 3.0, 
    recommended: 2.0, 
    notes: "Generally safe, calming, good for beginners",
    category: "Floral"
  },
  "Tea Tree": { 
    maxUsage: 1.0, 
    recommended: 0.5, 
    notes: "Strong antimicrobial, can be sensitizing at higher rates",
    category: "Medicinal"
  },
  "Lemon": { 
    maxUsage: 2.0, 
    recommended: 1.5, 
    notes: "Citrus oils can cause photosensitivity, may accelerate trace",
    category: "Citrus"
  },
  "Orange Sweet": { 
    maxUsage: 2.5, 
    recommended: 2.0, 
    notes: "Mild citrus, good for blending, may accelerate trace",
    category: "Citrus"
  },
  "Peppermint": { 
    maxUsage: 1.0, 
    recommended: 0.5, 
    notes: "Very potent, cooling effect, can be irritating in high amounts",
    category: "Mint"
  },
  "Eucalyptus": { 
    maxUsage: 1.5, 
    recommended: 1.0, 
    notes: "Refreshing, good for respiratory blends, moderate strength",
    category: "Medicinal"
  },
  "Rosemary": { 
    maxUsage: 1.5, 
    recommended: 1.0, 
    notes: "Herbal, may help with hair health, moderate usage",
    category: "Herbal"
  },
  "Geranium": { 
    maxUsage: 2.0, 
    recommended: 1.5, 
    notes: "Floral-rosy, balancing, generally well-tolerated",
    category: "Floral"
  },
  "Frankincense": { 
    maxUsage: 2.5, 
    recommended: 1.5, 
    notes: "Luxury oil, anti-aging properties, generally safe",
    category: "Resin"
  },
  "Lemongrass": { 
    maxUsage: 1.0, 
    recommended: 0.7, 
    notes: "Fresh citrusy-herbal, can be sensitizing, use sparingly",
    category: "Herbal"
  },
  "Cedarwood": { 
    maxUsage: 2.0, 
    recommended: 1.5, 
    notes: "Woody, grounding, good for masculine blends",
    category: "Wood"
  },
  "Ylang Ylang": { 
    maxUsage: 1.5, 
    recommended: 1.0, 
    notes: "Exotic floral, can be overpowering, use moderately",
    category: "Floral"
  }
};

const gramsToOz = (grams) => grams / 28.35;
const ozToGrams = (oz) => oz * 28.35;
const gramsToDisplayUnit = (grams, unit) => unit === "oz" ? gramsToOz(grams) : grams;
const displayUnitToGrams = (value, unit) => unit === "oz" ? ozToGrams(value) : value;

const SoapCalculator = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const [oils, setOils] = React.useState([{ name: "", percent: "", sap: "", weightGrams: "" }]);
  const [essentialOils, setEssentialOils] = React.useState([]);
  const [batchSizeGrams, setBatchSizeGrams] = React.useState(ozToGrams(32));
  const [waterRatio, setWaterRatio] = React.useState(2.5);
  const [superfat, setSuperfat] = React.useState(5);
  const [lyePurity, setLyePurity] = React.useState(97);
  const [waterCalcMethod, setWaterCalcMethod] = React.useState("ratio");
  const [waterDiscount, setWaterDiscount] = React.useState(0);
  const [units, setUnits] = React.useState("oz");
  const [errorMessage, setErrorMessage] = React.useState("");
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const [recipeName, setRecipeName] = React.useState("My Soap Recipe");
  const [isDirty, setIsDirty] = React.useState(false);

  const [basicSettingsOpen, setBasicSettingsOpen] = React.useState(true);
  const [advancedSettingsOpen, setAdvancedSettingsOpen] = React.useState(false);
  const [additivesOpen, setAdditivesOpen] = React.useState(false);
  const [baseOilsOpen, setBaseOilsOpen] = React.useState(true);
  const [essentialOilsOpen, setEssentialOilsOpen] = React.useState(false);
  const [showResetDialog, setShowResetDialog] = React.useState(false);

  const calculateTotalOilWeight = React.useCallback((oilsArray = oils) => {
    return oilsArray.reduce((sum, oil) => sum + parseFloat(oil.weightGrams || 0), 0);
  }, [oils]);

  const calculateTotalLye = React.useCallback((oilsArray = oils, superfatPercent = superfat, purityPercent = lyePurity) => {
    const pureLyeNeeded = oilsArray.reduce((sum, oil) => {
      const weightGrams = parseFloat(oil.weightGrams || 0);
      const weightOz = gramsToOz(weightGrams);
      const sap = parseFloat(oil.sap || 0);
      return sum + weightOz * sap;
    }, 0) * (1 - superfatPercent / 100);
    
    const actualLyeNeeded = pureLyeNeeded / (purityPercent / 100);
    
    return {
      pureLye: pureLyeNeeded,
      actualLye: actualLyeNeeded
    };
  }, [oils, superfat, lyePurity]);

  const calculateTotalWater = React.useCallback((lyeAmount, oilWeightGrams = 0, method = waterCalcMethod, ratio = waterRatio, discount = waterDiscount) => {
    if (method === "ratio") {
      return parseFloat((lyeAmount * ratio).toFixed(2));
    } else {
      const oilWeightOz = gramsToOz(oilWeightGrams);
      const standardWaterPercent = 38;
      const discountedPercent = standardWaterPercent - discount;
      const waterNeededOz = (oilWeightOz * discountedPercent) / 100;
      return parseFloat(waterNeededOz.toFixed(2));
    }
  }, [waterCalcMethod, waterRatio, waterDiscount]);

  const getLyeAndWaterAmounts = React.useCallback((oilsArray = oils, targetUnits = units) => {
    const totalOilWeightGrams = calculateTotalOilWeight(oilsArray);
    const lyeResults = calculateTotalLye(oilsArray);
    const totalWaterOz = calculateTotalWater(lyeResults.actualLye, totalOilWeightGrams);
    
    const effectiveRatio = totalWaterOz / lyeResults.actualLye;
    const lyeConcentration = (lyeResults.actualLye / (lyeResults.actualLye + totalWaterOz)) * 100;
    
    const pureLyeWeight = targetUnits === "oz" ? lyeResults.pureLye : ozToGrams(lyeResults.pureLye);
    const actualLyeWeight = targetUnits === "oz" ? lyeResults.actualLye : ozToGrams(lyeResults.actualLye);
    const waterWeight = targetUnits === "oz" ? totalWaterOz : ozToGrams(totalWaterOz);
    const oilWeight = gramsToDisplayUnit(totalOilWeightGrams, targetUnits);
    
    return {
      pureLye: pureLyeWeight,
      actualLye: actualLyeWeight,
      totalWater: waterWeight,
      totalOilWeight: oilWeight,
      effectiveRatio: effectiveRatio,
      lyeConcentration: lyeConcentration
    };
  }, [calculateTotalOilWeight, calculateTotalLye, calculateTotalWater, oils, units]);

  const calculateSoapQualities = React.useCallback((oilsArray = oils, oilProps = oilProperties) => {
    const totalWeight = calculateTotalOilWeight(oilsArray);
    
    if (totalWeight === 0) return null;
    
    const qualities = {
      hardness: 0,
      cleansing: 0,
      conditioning: 0,
      bubbly: 0,
      creamy: 0
    };
    
    oilsArray.forEach(oil => {
      if (oil.name && oilProps[oil.name]) {
        const weight = parseFloat(oil.weightGrams || 0);
        const percentage = weight / totalWeight;
        
        for (const quality in qualities) {
          qualities[quality] += oilProps[oil.name][quality] * percentage;
        }
      }
    });
    
    for (const quality in qualities) {
      qualities[quality] = Math.round(qualities[quality] * 10) / 10;
    }
    
    return qualities;
  }, [calculateTotalOilWeight]);

  const totalPercent = React.useMemo(() => {
    return oils.reduce((sum, oil) => sum + parseFloat(oil.percent || 0), 0);
  }, [oils]);

  const calcResults = React.useMemo(() => {
    if (batchSizeGrams > 0 && oils.some(oil => oil.name && oil.percent)) {
      return getLyeAndWaterAmounts();
    }
    return null;
  }, [oils, batchSizeGrams, waterRatio, waterCalcMethod, waterDiscount, superfat, lyePurity, units, getLyeAndWaterAmounts]);

  const soapQualities = React.useMemo(() => {
    const validOils = oils.filter(oil => 
      oil.name && 
      (parseFloat(oil.percent || 0) > 0 || parseFloat(oil.weightGrams || 0) > 0)
    );
    
    if (validOils.length > 0) {
      const oilsWithWeights = oils.map(oil => {
        if (oil.name && oil.percent && batchSizeGrams > 0) {
          const percent = parseFloat(oil.percent || 0);
          const calculatedWeight = (batchSizeGrams * percent) / 100;
          return {
            ...oil,
            weightGrams: oil.weightGrams || calculatedWeight.toFixed(2)
          };
        }
        return oil;
      });
      
      return calculateSoapQualities(oilsWithWeights, oilProperties);
    }
    return null;
  }, [oils, batchSizeGrams, calculateSoapQualities]);

  React.useEffect(() => {
    if (totalPercent > 0 && !isDirty) {
      setIsDirty(true);
    }
  }, [totalPercent, isDirty]);

  React.useEffect(() => {
    if (essentialOils.length > 0 && calcResults) {
      const updatedEOs = essentialOils.map(eo => {
        if (eo.usageRate) {
          const rate = parseFloat(eo.usageRate);
          const totalOilWeightGrams = calculateTotalOilWeight();
          const eoAmountGrams = (totalOilWeightGrams * rate) / 100;
          return {
            ...eo,
            amount: gramsToDisplayUnit(eoAmountGrams, units).toFixed(2)
          };
        }
        return eo;
      });
      setEssentialOils(updatedEOs);
    }
  }, [calcResults, units, calculateTotalOilWeight]);

  const calculateTotalEssentialOilAmount = React.useMemo(() => {
    if (!calcResults) return 0;
    
    return essentialOils.reduce((total, eo) => {
      const rate = parseFloat(eo.usageRate || 0);
      const totalOilWeightGrams = calculateTotalOilWeight();
      const eoAmountGrams = (totalOilWeightGrams * rate) / 100;
      return total + eoAmountGrams;
    }, 0);
  }, [essentialOils, calcResults, calculateTotalOilWeight]);

  const hasValidationErrors = React.useMemo(() => {
    if (Math.abs(totalPercent - 100) > 0.1 && oils.some(oil => oil.name)) {
      return true;
    }
    
    if (!oils.some(oil => oil.name)) {
      return true;
    }
    
    return false;
  }, [totalPercent, oils]);

  const uniqueOils = Object.keys(sapValues);

  const handleChange = (index, field, value) => {
    setErrorMessage("");
    const updatedOils = [...oils];
    const currentOil = { ...updatedOils[index] };
    currentOil[field] = value;

    if (field === "name") {
      currentOil.sap = sapValues[value] || "";
    }

    const percent = parseFloat(currentOil.percent || 0);

    if (field === "percent" && batchSizeGrams > 0 && !isNaN(percent)) {
      const newWeightGrams = (batchSizeGrams * percent) / 100;
      currentOil.weightGrams = newWeightGrams.toFixed(2);
    } else if (field === "weight" && batchSizeGrams > 0) {
      const inputWeight = parseFloat(value || 0);
      if (!isNaN(inputWeight)) {
        const newWeightGrams = displayUnitToGrams(inputWeight, units);
        const newPercent = (newWeightGrams / batchSizeGrams) * 100;
        currentOil.weightGrams = newWeightGrams.toFixed(2);
        currentOil.percent = newPercent.toFixed(2);
      }
    }

    updatedOils[index] = currentOil;
    setOils(updatedOils);
  };

  const handleRemoveOil = (index) => {
    const updatedOils = oils.filter((_, i) => i !== index);
    setOils(updatedOils);
  };

  const handleAddOil = () => {
    setOils([...oils, { name: "", percent: "", sap: "", weightGrams: "" }]);
  };

  const handleAddEssentialOil = () => {
    setEssentialOils([...essentialOils, { 
      name: "", 
      usageRate: "", 
      amount: "", 
      notes: "" 
    }]);
  };

  const handleRemoveEssentialOil = (index) => {
    const updatedEOs = essentialOils.filter((_, i) => i !== index);
    setEssentialOils(updatedEOs);
  };

  const handleEssentialOilChange = (index, field, value) => {
    const updatedEOs = [...essentialOils];
    const currentEO = { ...updatedEOs[index] };
    currentEO[field] = value;

    if (field === "name" && essentialOilsData[value]) {
      currentEO.usageRate = essentialOilsData[value].recommended;
      currentEO.notes = essentialOilsData[value].notes;
    }

    if ((field === "usageRate" || field === "name") && calcResults) {
      const rate = parseFloat(currentEO.usageRate || 0);
      const totalOilWeightGrams = calculateTotalOilWeight();
      const eoAmountGrams = (totalOilWeightGrams * rate) / 100;
      currentEO.amount = gramsToDisplayUnit(eoAmountGrams, units).toFixed(2);
    }

    updatedEOs[index] = currentEO;
    setEssentialOils(updatedEOs);
  };

  const toggleUnits = () => {
    setUnits(units === "oz" ? "g" : "oz");
  };

  const resetAllData = () => {
    setOils([{ name: "", percent: "", sap: "", weightGrams: "" }]);
    setEssentialOils([]);
    setBatchSizeGrams(ozToGrams(32));
    setWaterRatio(2.5);
    setSuperfat(5);
    setLyePurity(97);
    setWaterCalcMethod("ratio");
    setWaterDiscount(0);
    setRecipeName("My Soap Recipe");
    
    setErrorMessage("");
    setIsDirty(false);
    setTooltipVisible(false);
    
    setBasicSettingsOpen(true);
    setAdvancedSettingsOpen(false);
    setAdditivesOpen(false);
    setBaseOilsOpen(true);
    setEssentialOilsOpen(false);
    
    setShowResetDialog(false);
  };

  const handleResetButtonClick = () => {
    setShowResetDialog(true);
  };

  const handleExportRecipe = () => {
    if (hasValidationErrors) {
      setErrorMessage("Please fix all errors before saving your recipe.");
      return;
    }
    
    if (!calcResults) {
      setErrorMessage("Please complete your recipe before saving.");
      return;
    }
    
    setTimeout(() => {
      let recipeText = `${recipeName}\n`;
      recipeText += `===============================\n\n`;
      
      recipeText += `RECIPE PROPERTIES\n`;
      recipeText += `-----------------------------\n`;
      recipeText += `Batch Size: ${gramsToDisplayUnit(batchSizeGrams, units).toFixed(2)} ${units}\n`;
      recipeText += `Superfat: ${superfat}%\n`;
      recipeText += `Water Calculation: ${waterCalcMethod === "ratio" ? `${waterRatio}:1 Ratio` : `${waterDiscount}% Discount (${(38 - waterDiscount).toFixed(1)}% of oils)`}\n`;
      recipeText += `Effective Water:Lye Ratio: ${calcResults.effectiveRatio.toFixed(2)}:1\n`;
      recipeText += `Lye Concentration: ${calcResults.lyeConcentration.toFixed(1)}%\n`;
      recipeText += `Lye Purity: ${lyePurity}%\n\n`;
      
      recipeText += `INGREDIENTS\n`;
      recipeText += `-----------------------------\n`;
      recipeText += `Total Oils: ${calcResults.totalOilWeight.toFixed(2)} ${units}\n`;
      recipeText += `Lye (NaOH) - WEIGH OUT: ${calcResults.actualLye.toFixed(2)} ${units}\n`;
      if (Math.abs(calcResults.actualLye - calcResults.pureLye) > 0.01) {
        recipeText += `  (Pure lye needed: ${calcResults.pureLye.toFixed(2)} ${units})\n`;
        recipeText += `  (Adjusted for ${lyePurity}% purity: +${(calcResults.actualLye - calcResults.pureLye).toFixed(2)} ${units})\n`;
      }
      recipeText += `Water Required: ${calcResults.totalWater.toFixed(2)} ${units}\n\n`;
      
      recipeText += `OIL COMPOSITION\n`;
      recipeText += `-----------------------------\n`;
      oils.filter(oil => oil.name).forEach(oil => {
        const displayWeight = oil.weightGrams ? gramsToDisplayUnit(parseFloat(oil.weightGrams), units).toFixed(2) : '0.00';
        recipeText += `${oil.name}: ${parseFloat(oil.percent || 0).toFixed(2)}% (${displayWeight} ${units})\n`;
      });
      recipeText += `\n`;
      
      recipeText += `Generated with Cold Process Soap Calculator v1.0\n`;
      
      try {
        navigator.clipboard.writeText(recipeText).then(() => {
          const successMessage = document.createElement("div");
          successMessage.innerText = "Recipe copied to clipboard!";
          successMessage.style.position = "fixed";
          successMessage.style.bottom = "20px";
          successMessage.style.left = "50%";
          successMessage.style.transform = "translateX(-50%)";
          successMessage.style.padding = "10px 20px";
          successMessage.style.backgroundColor = darkMode ? "#065f46" : "#059669";
          successMessage.style.color = "white";
          successMessage.style.borderRadius = "4px";
          successMessage.style.zIndex = "1000";
          document.body.appendChild(successMessage);
          
          setTimeout(() => {
            document.body.removeChild(successMessage);
          }, 2000);
        });
      } catch (err) {
        console.error("Clipboard operation failed", err);
      }
    }, 50);
  };

  const handleExportPDF = () => {
    if (hasValidationErrors) {
      setErrorMessage("Please fix all errors before generating PDF recipe card.");
      return;
    }
    
    if (!calcResults) {
      setErrorMessage("Please complete your recipe before generating PDF.");
      return;
    }

    try {
      const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${recipeName} - Professional Recipe Card</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #1f2937;
            background: #ffffff;
            font-size: 14px;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        .header {
            background: linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #7c3aed 100%);
            color: white;
            padding: 40px 30px;
            border-radius: 16px;
            text-align: center;
            margin-bottom: 32px;
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }
        
        .header h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 8px;
            letter-spacing: -0.025em;
        }
        
        .header p {
            font-size: 1.1rem;
            opacity: 0.9;
            font-weight: 400;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin-bottom: 40px;
        }
        
        .stat-card {
            background: #ffffff;
            border: 2px solid #f1f5f9;
            border-radius: 12px;
            padding: 24px;
            text-align: center;
            transition: all 0.2s ease;
        }
        
        .stat-value {
            font-size: 2rem;
            font-weight: 700;
            color: #3b82f6;
            margin-bottom: 4px;
        }
        
        .stat-label {
            font-size: 0.875rem;
            font-weight: 600;
            color: #64748b;
            text-transform: uppercase;
            letter-spacing: 0.05em;
        }
        
        .section {
            margin-bottom: 40px;
        }
        
        .section-header {
            display: flex;
            align-items: center;
            margin-bottom: 24px;
            padding-bottom: 12px;
            border-bottom: 3px solid #f1f5f9;
        }
        
        .section-title {
            font-size: 1.5rem;
            font-weight: 700;
            color: #1f2937;
            margin-left: 8px;
        }
        
        .ingredients-summary {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            border: 2px solid #e2e8f0;
            border-radius: 16px;
            overflow: hidden;
            margin-bottom: 32px;
        }
        
        .summary-header {
            background: #3b82f6;
            color: white;
            padding: 20px 24px;
            font-weight: 600;
            font-size: 1.1rem;
        }
        
        .summary-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 0;
        }
        
        .summary-item {
            padding: 20px 24px;
            border-right: 1px solid #e2e8f0;
            border-bottom: 1px solid #e2e8f0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .summary-item:last-child {
            border-right: none;
        }
        
        .summary-label {
            font-weight: 600;
            color: #374151;
        }
        
        .summary-value {
            font-weight: 700;
            font-size: 1.1rem;
            color: #1f2937;
        }
        
        .summary-note {
            font-size: 0.75rem;
            color: #6b7280;
            margin-top: 2px;
        }
        
        .modern-table {
            width: 100%;
            border-collapse: separate;
            border-spacing: 0;
            background: white;
            border: 2px solid #f1f5f9;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
            margin-bottom: 24px;
        }
        
        .modern-table th {
            background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
            padding: 16px 20px;
            text-align: left;
            font-weight: 600;
            color: #374151;
            font-size: 0.875rem;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            border-bottom: 2px solid #e2e8f0;
        }
        
        .modern-table td {
            padding: 16px 20px;
            border-bottom: 1px solid #f8fafc;
            vertical-align: top;
        }
        
        .modern-table tr:last-child td {
            border-bottom: none;
        }
        
        .oil-name {
            font-weight: 600;
            color: #1f2937;
        }
        
        .oil-description {
            font-size: 0.8rem;
            color: #6b7280;
            margin-top: 4px;
            line-height: 1.4;
        }
        
        .essential-table th {
            background: linear-gradient(135deg, #fdf4ff 0%, #f3e8ff 100%);
            color: #7c3aed;
        }
        
        .category-badge {
            display: inline-block;
            background: #e0e7ff;
            color: #3730a3;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 500;
        }
        
        .warning-badge {
            display: inline-block;
            background: #fef3c7;
            color: #92400e;
            padding: 2px 8px;
            border-radius: 12px;
            font-size: 0.75rem;
            font-weight: 600;
        }
        
        .quality-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 24px 0;
        }
        
        .quality-card {
            background: white;
            border: 2px solid #f1f5f9;
            border-radius: 12px;
            padding: 20px;
            text-align: center;
        }
        
        .quality-icon {
            font-size: 2rem;
            margin-bottom: 8px;
        }
        
        .quality-name {
            font-weight: 600;
            color: #374151;
            margin-bottom: 8px;
        }
        
        .quality-value {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 4px;
        }
        
        .quality-target {
            font-size: 0.75rem;
            color: #6b7280;
        }
        
        .hardness { border-left: 4px solid #3b82f6; }
        .hardness .quality-value { color: #3b82f6; }
        
        .cleansing { border-left: 4px solid #10b981; }
        .cleansing .quality-value { color: #10b981; }
        
        .conditioning { border-left: 4px solid #8b5cf6; }
        .conditioning .quality-value { color: #8b5cf6; }
        
        .bubbly { border-left: 4px solid #f59e0b; }
        .bubbly .quality-value { color: #f59e0b; }
        
        .creamy { border-left: 4px solid #ec4899; }
        .creamy .quality-value { color: #ec4899; }
        
        .safety-section {
            background: linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%);
            border: 2px solid #fca5a5;
            border-radius: 16px;
            padding: 24px;
            margin: 32px 0;
        }
        
        .safety-title {
            color: #dc2626;
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .safety-list {
            list-style: none;
        }
        
        .safety-list li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 12px;
            color: #7f1d1d;
            line-height: 1.5;
        }
        
        .safety-list li span {
            margin-right: 12px;
            font-size: 1.2rem;
        }
        
        .footer {
            text-align: center;
            margin-top: 48px;
            padding-top: 24px;
            border-top: 2px solid #f1f5f9;
            color: #6b7280;
        }
        
        .footer p {
            margin-bottom: 8px;
        }
        
        .footer .brand {
            font-weight: 700;
            color: #3b82f6;
        }
        
        @media (max-width: 768px) {
            .container {
                padding: 16px;
            }
            
            .header {
                padding: 24px 20px;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .stats-grid {
                grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
                gap: 16px;
            }
            
            .modern-table th,
            .modern-table td {
                padding: 12px 16px;
            }
        }
        
        @media print {
            @page {
                margin: 0.5in;
                size: A4;
            }
            
            body {
                font-size: 12px;
            }
            
            .container {
                max-width: none;
                padding: 0;
            }
            
            .header {
                margin-bottom: 24px;
                box-shadow: none;
            }
            
            .section {
                margin-bottom: 24px;
                page-break-inside: avoid;
            }
            
            .modern-table {
                box-shadow: none;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🧼 ${recipeName}</h1>
            <p>Professional Cold Process Soap Recipe</p>
        </div>
        
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">${gramsToDisplayUnit(batchSizeGrams, units).toFixed(1)}</div>
                <div class="stat-label">Batch Size (${units})</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${superfat}%</div>
                <div class="stat-label">Superfat</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${calcResults.lyeConcentration.toFixed(1)}%</div>
                <div class="stat-label">Lye Concentration</div>
            </div>
            ${essentialOils.filter(eo => eo.name).length > 0 ? `
            <div class="stat-card">
                <div class="stat-value">${essentialOils.filter(eo => eo.name).length}</div>
                <div class="stat-label">Essential Oil${essentialOils.filter(eo => eo.name).length !== 1 ? 's' : ''}</div>
            </div>
            ` : ''}
        </div>
        
        <div class="section">
            <div class="ingredients-summary">
                <div class="summary-header">
                    📋 Ingredients to Weigh
                </div>
                <div class="summary-grid">
                    <div class="summary-item">
                        <div>
                            <div class="summary-label">Base Oils</div>
                            <div class="summary-note">${oils.filter(oil => oil.name).length} oil${oils.filter(oil => oil.name).length !== 1 ? 's' : ''} combined</div>
                        </div>
                        <div class="summary-value">${calcResults.totalOilWeight.toFixed(1)} ${units}</div>
                    </div>
                    <div class="summary-item">
                        <div>
                            <div class="summary-label">Lye (NaOH)</div>
                            <div class="summary-note">${lyePurity}% purity</div>
                        </div>
                        <div class="summary-value">${calcResults.actualLye.toFixed(2)} ${units}</div>
                    </div>
                    <div class="summary-item">
                        <div>
                            <div class="summary-label">Water</div>
                            <div class="summary-note">${waterCalcMethod === "ratio" ? `${waterRatio}:1 ratio` : `${waterDiscount}% discount`}</div>
                        </div>
                        <div class="summary-value">${calcResults.totalWater.toFixed(1)} ${units}</div>
                    </div>
                    ${essentialOils.filter(eo => eo.name).length > 0 ? `
                    <div class="summary-item">
                        <div>
                            <div class="summary-label">Essential Oils</div>
                            <div class="summary-note">${((calculateTotalEssentialOilAmount / gramsToDisplayUnit(displayUnitToGrams(calcResults.totalOilWeight, units), 'g')) * 100).toFixed(2)}% of oil weight</div>
                        </div>
                        <div class="summary-value">${gramsToDisplayUnit(calculateTotalEssentialOilAmount, units).toFixed(2)} ${units}</div>
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>
        
        <div class="section">
            <div class="section-header">
                <span>🌿</span>
                <h2 class="section-title">Base Oil Composition</h2>
            </div>
            <table class="modern-table">
                <thead>
                    <tr>
                        <th>Oil/Fat</th>
                        <th>Percentage</th>
                        <th>Weight (${units})</th>
                        <th>Properties</th>
                    </tr>
                </thead>
                <tbody>
                    ${oils.filter(oil => oil.name).map(oil => {
                      const percentage = parseFloat(oil.percent || 0);
                      const weight = oil.weightGrams ? gramsToDisplayUnit(parseFloat(oil.weightGrams), units) : 0;
                      const description = oilDescriptions[oil.name] || 'Professional soap making oil';
                      return `<tr>
                        <td>
                            <div class="oil-name">${oil.name}</div>
                        </td>
                        <td><strong>${percentage.toFixed(1)}%</strong></td>
                        <td><strong>${weight.toFixed(1)} ${units}</strong></td>
                        <td>
                            <div class="oil-description">${description}</div>
                        </td>
                      </tr>`;
                    }).join('')}
                </tbody>
            </table>
        </div>
        
        ${essentialOils.filter(eo => eo.name).length > 0 ? `
        <div class="section">
            <div class="section-header">
                <span>🌸</span>
                <h2 class="section-title">Essential Oils & Fragrances</h2>
            </div>
            <table class="modern-table essential-table">
                <thead>
                    <tr>
                        <th>Essential Oil</th>
                        <th>Usage Rate</th>
                        <th>Amount (${units})</th>
                        <th>Category & Safety Notes</th>
                    </tr>
                </thead>
                <tbody>
                    ${essentialOils.filter(eo => eo.name).map(eo => {
                      const usageRate = parseFloat(eo.usageRate || 0);
                      const amount = parseFloat(eo.amount || 0);
                      const oilData = essentialOilsData[eo.name];
                      const exceedsMax = oilData && usageRate > oilData.maxUsage;
                      return `<tr>
                        <td>
                            <div class="oil-name">${eo.name}</div>
                        </td>
                        <td>
                            <strong>${usageRate.toFixed(1)}%</strong> of oils
                            ${exceedsMax ? '<br><span class="warning-badge">⚠️ Exceeds Max Safe Usage</span>' : ''}
                        </td>
                        <td><strong>${amount.toFixed(2)} ${units}</strong></td>
                        <td>
                            ${oilData ? `
                                <div class="category-badge">${oilData.category}</div>
                                <div class="oil-description">${oilData.notes}</div>
                                <div style="font-size: 0.75rem; color: #6b7280; margin-top: 4px;">
                                    Max safe usage: ${oilData.maxUsage}% • Recommended: ${oilData.recommended}%
                                </div>
                            ` : '<div class="oil-description">Custom essential oil</div>'}
                        </td>
                      </tr>`;
                    }).join('')}
                </tbody>
            </table>
        </div>
        ` : ''}
        
        ${soapQualities ? `
        <div class="section">
            <div class="section-header">
                <span>📊</span>
                <h2 class="section-title">Soap Quality Profile</h2>
            </div>
            <div class="quality-grid">
                <div class="quality-card hardness">
                    <div class="quality-icon">🧱</div>
                    <div class="quality-name">Hardness</div>
                    <div class="quality-value">${soapQualities.hardness.toFixed(1)}/5</div>
                    <div class="quality-target">Target: 3-5</div>
                </div>
                <div class="quality-card cleansing">
                    <div class="quality-icon">🧽</div>
                    <div class="quality-name">Cleansing</div>
                    <div class="quality-value">${soapQualities.cleansing.toFixed(1)}/5</div>
                    <div class="quality-target">Target: 1-3</div>
                </div>
                <div class="quality-card conditioning">
                    <div class="quality-icon">💧</div>
                    <div class="quality-name">Conditioning</div>
                    <div class="quality-value">${soapQualities.conditioning.toFixed(1)}/5</div>
                    <div class="quality-target">Target: 3-5</div>
                </div>
                <div class="quality-card bubbly">
                    <div class="quality-icon">🫧</div>
                    <div class="quality-name">Bubbly Lather</div>
                    <div class="quality-value">${soapQualities.bubbly.toFixed(1)}/5</div>
                    <div class="quality-target">Target: 2-5</div>
                </div>
                <div class="quality-card creamy">
                    <div class="quality-icon">🥛</div>
                    <div class="quality-name">Creamy Lather</div>
                    <div class="quality-value">${soapQualities.creamy.toFixed(1)}/5</div>
                    <div class="quality-target">Target: 2-5</div>
                </div>
            </div>
        </div>
        ` : ''}
        
        <div class="safety-section">
            <h3 class="safety-title">⚠️ Safety Guidelines</h3>
            <ul class="safety-list">
                <li>
                    <span>🥽</span>
                    Always wear protective gear: safety goggles, gloves, and long sleeves
                </li>
                <li>
                    <span>🌡️</span>
                    ${calcResults.lyeConcentration > 40 ? 
                        `High lye concentration (${calcResults.lyeConcentration.toFixed(1)}%) - mix very carefully, solution will get extremely hot` :
                        'Mix lye solution slowly and carefully - it will get hot'
                    }
                </li>
                <li>
                    <span>🏠</span>
                    Work in a well-ventilated area and keep pets and children away
                </li>
                <li>
                    <span>📋</span>
                    Verify lye purity on product label (${lyePurity}% used in calculations)
                </li>
                ${waterCalcMethod === "discount" && waterDiscount > 0 ? `
                <li>
                    <span>⚡</span>
                    Water discount used - expect faster trace and quicker saponification
                </li>
                ` : ''}
                ${essentialOils.length > 0 ? `
                <li>
                    <span>🌸</span>
                    Essential oils: Add at light trace, patch test finished soap before use
                </li>
                ` : ''}
                ${essentialOils.some(eo => eo.name && essentialOilsData[eo.name] && parseFloat(eo.usageRate || 0) > essentialOilsData[eo.name].maxUsage) ? `
                <li>
                    <span>⚠️</span>
                    <strong>WARNING: Some essential oils exceed recommended maximum usage rates!</strong>
                </li>
                ` : ''}
            </ul>
        </div>
        
        <div class="footer">
            <p>Generated with <span class="brand">Lye by Dev v1.0</span> - Professional Cold Process Soap Calculator</p>
            <p>Recipe created on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
            <p style="font-size: 0.75rem; font-style: italic;">Always double-check calculations and follow proper safety procedures</p>
        </div>
    </div>
</body>
</html>`;
      
      const newWindow = window.open('', '_blank');
      if (newWindow) {
        newWindow.document.write(htmlContent);
        newWindow.document.close();
        
        const successMessage = document.createElement("div");
        successMessage.innerText = "Professional recipe card opened! Use Ctrl+P or Cmd+P to save as PDF.";
        successMessage.style.position = "fixed";
        successMessage.style.bottom = "20px";
        successMessage.style.left = "50%";
        successMessage.style.transform = "translateX(-50%)";
        successMessage.style.padding = "10px 20px";
        successMessage.style.backgroundColor = darkMode ? "#7c3aed" : "#8b5cf6";
        successMessage.style.color = "white";
        successMessage.style.borderRadius = "4px";
        successMessage.style.zIndex = "1000";
        successMessage.style.maxWidth = "90vw";
        successMessage.style.textAlign = "center";
        document.body.appendChild(successMessage);
        
        setTimeout(() => {
          if (document.body.contains(successMessage)) {
            document.body.removeChild(successMessage);
          }
        }, 4000);
      } else {
        alert("Please allow pop-ups to generate the PDF recipe card.");
      }
    } catch (error) {
      console.error("Error generating PDF:", error);
      setErrorMessage("Error generating PDF. Please try again.");
    }
  };

  const handleBatchSizeChange = (value) => {
    const displayValue = parseFloat(value) || 0;
    const newBatchSizeGrams = displayUnitToGrams(displayValue, units);
    setBatchSizeGrams(newBatchSizeGrams);
    
    const updatedOils = oils.map(oil => {
      const percent = parseFloat(oil.percent || 0);
      const newWeightGrams = percent * newBatchSizeGrams / 100;
      return {
        ...oil,
        weightGrams: newWeightGrams.toFixed(2)
      };
    });
    
    setOils(updatedOils);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`p-4 max-w-5xl mx-auto ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-50 text-gray-800'} rounded-xl shadow-lg transition-colors duration-300`}>
      
      {showResetDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" style={{ zIndex: 9999 }}>
          <div className={`${darkMode ? 'bg-gray-800 border-gray-600' : 'bg-white border-gray-300'} border-2 rounded-lg p-6 max-w-md mx-4 shadow-xl`}>
            <h3 className={`text-lg font-bold mb-4 ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
              Confirm Reset
            </h3>
            <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Are you sure you want to reset all fields? This will delete your current recipe and all calculations. This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowResetDialog(false)}
                className={`px-4 py-2 rounded-lg ${darkMode ? 'bg-gray-700 hover:bg-gray-600 text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-800'}`}
              >
                Cancel
              </button>
              <button
                onClick={resetAllData}
                className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white"
              >
                Reset Everything
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="sticky top-0 z-20 pb-2 pt-1 px-1 bg-opacity-95 backdrop-blur-sm mb-4 flex justify-between items-center" style={{backgroundColor: darkMode ? 'rgba(31, 41, 55, 0.95)' : 'rgba(249, 250, 251, 0.95)'}}>
        <h1 className={`text-xl sm:text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-700'} flex items-center`}>
          <span className="mr-2">🧼</span>
          Lye by Dev
          <span className={`ml-2 text-xs px-2 py-1 rounded ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
            v1.0
          </span>
        </h1>
        <button 
          onClick={toggleDarkMode} 
          className={`p-2 rounded-full ${darkMode ? 'bg-gray-700 text-yellow-300' : 'bg-blue-100 text-blue-800'} hover:opacity-80 transition-all`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
      
      {/* Basic Settings Card */}
      <div className={`mb-4 p-4 rounded-lg shadow ${darkMode ? 'bg-gray-700' : 'bg-white'} transition-colors`}>
        <button 
          onClick={() => setBasicSettingsOpen(!basicSettingsOpen)}
          className="w-full flex items-center justify-between"
        >
          <h2 className={`text-lg font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'} flex items-center`}>
            <Calculator size={18} className="mr-2" /> Basic Settings
          </h2>
          {basicSettingsOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
        
        {basicSettingsOpen && (
          <div className="mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full">
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Batch Size</label>
                <div className="flex items-center">
                  <input
                    type="number"
                    value={gramsToDisplayUnit(batchSizeGrams, units).toFixed(2)}
                    onChange={(e) => handleBatchSizeChange(e.target.value)}
                    className={`w-full p-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors`}
                  />
                  <button
                    onClick={toggleUnits}
                    className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-3 py-2 rounded-r-lg transition-colors`}
                  >
                    {units.toUpperCase()}
                  </button>
                </div>
              </div>
              
              <div className="w-full">
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Recipe Name</label>
                <input
                  type="text"
                  value={recipeName}
                  onChange={(e) => setRecipeName(e.target.value)}
                  className={`w-full p-2 border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors`}
                  placeholder="Enter a name for your recipe"
                />
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Advanced Settings Card */}
      <div className={`mb-4 p-4 rounded-lg shadow ${darkMode ? 'bg-gray-700' : 'bg-white'} transition-colors`}>
        <button 
          onClick={() => setAdvancedSettingsOpen(!advancedSettingsOpen)}
          className="w-full flex items-center justify-between"
        >
          <h2 className={`text-lg font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'} flex items-center`}>
            <Settings size={18} className="mr-2" /> Advanced Settings
          </h2>
          {advancedSettingsOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
        
        {advancedSettingsOpen && (
          <div className="mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="w-full">
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Superfat %</label>
                <input
                  type="number"
                  value={superfat}
                  onChange={(e) => setSuperfat(parseFloat(e.target.value) || 5)}
                  className={`w-full p-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors`}
                />
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                  Recommended: 5-8% (higher = more moisturizing)
                </div>
              </div>
              
              <div className="w-full">
                <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Lye Purity %
                </label>
                <input
                  type="number"
                  value={lyePurity}
                  onChange={(e) => setLyePurity(parseFloat(e.target.value) || 97)}
                  className={`w-full p-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors`}
                  step="0.1"
                  min="90"
                  max="100"
                />
                <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                  Commercial lye: 95-99% (check label)
                </div>
              </div>
            </div>
            
            <div className={`mt-4 p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-green-50'}`}>
              <h4 className="font-medium mb-3 flex items-center">
                <Calculator size={16} className="mr-2" />
                Water Calculation Method
              </h4>
              
              <div className="flex gap-4 mb-3">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="waterMethod"
                    value="ratio"
                    checked={waterCalcMethod === "ratio"}
                    onChange={(e) => setWaterCalcMethod(e.target.value)}
                    className="mr-2"
                  />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Water:Lye Ratio</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="waterMethod"
                    value="discount"
                    checked={waterCalcMethod === "discount"}
                    onChange={(e) => setWaterCalcMethod(e.target.value)}
                    className="mr-2"
                  />
                  <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Water Discount %</span>
                </label>
              </div>
              
              {waterCalcMethod === "ratio" && (
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Water:Lye Ratio</label>
                  <input
                    type="number"
                    value={waterRatio}
                    onChange={(e) => setWaterRatio(parseFloat(e.target.value) || 2.5)}
                    className={`w-full p-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors`}
                    step="0.1"
                    min="1.5"
                  />
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                    Traditional method: 2:1 to 3:1
                  </div>
                </div>
              )}
              
              {waterCalcMethod === "discount" && (
                <div>
                  <label className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Water Discount %</label>
                  <input
                    type="number"
                    value={waterDiscount}
                    onChange={(e) => setWaterDiscount(parseFloat(e.target.value) || 0)}
                    className={`w-full p-2 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition-colors`}
                    step="0.5"
                    min="0"
                    max="15"
                  />
                  <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1`}>
                    Standard: 38% of oils (0% discount)
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      {errorMessage && (
        <div className={`mb-4 p-2 ${darkMode ? 'bg-red-900 text-red-200' : 'bg-red-100 text-red-700'} rounded-lg`}>
          {errorMessage}
        </div>
      )}

      {/* Oil Input Card */}
      <div className={`p-4 rounded-lg shadow mb-4 ${darkMode ? 'bg-gray-700' : 'bg-white'} transition-colors`}>
        <button 
          onClick={() => setBaseOilsOpen(!baseOilsOpen)}
          className="w-full flex items-center justify-between"
        >
          <h2 className={`text-lg font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'} flex items-center`}>
            <Calculator size={18} className="mr-2" /> Base Oils
          </h2>
          {baseOilsOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
        
        {baseOilsOpen && (
          <div className="mt-3">
            <div className="flex justify-between items-center mb-3">
              <div></div>
              <div className="relative" onMouseEnter={() => setTooltipVisible(true)} onMouseLeave={() => setTooltipVisible(false)}>
                <p className={`text-sm font-medium ${Math.abs(totalPercent - 100) > 0.1 ? 'text-red-500' : (darkMode ? 'text-green-400' : 'text-green-600')} flex items-center`}>
                  Total Oil: {totalPercent.toFixed(2)}% 
                  <Info size={16} className="ml-1 text-gray-400"/>
                </p>
                {tooltipVisible && (
                  <div className={`absolute z-10 p-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-800'} text-white text-xs rounded-lg w-48 shadow-lg right-0`}>
                    Your total oil percentage should equal exactly 100% for a balanced recipe.
                  </div>
                )}
              </div>
            </div>
            
            {Math.abs(totalPercent - 100) > 0.1 && totalPercent > 0 && isDirty && (
              <p className="mb-3 text-xs text-red-500 font-medium">
                Total oil percentage must equal 100% (currently {totalPercent.toFixed(2)}%)
              </p>
            )}
            
            <div className="overflow-x-auto border rounded-lg">
              <table className="w-full border-collapse">
                <thead>
                  <tr className={`${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                    <th className={`border-b p-2 text-left ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Oil/Fat</th>
                    <th className={`border-b p-2 text-center ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>%</th>
                    <th className={`border-b p-2 text-center ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Weight ({units})</th>
                    <th className={`border-b p-2 text-center ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>SAP Value</th>
                    <th className={`border-b p-2 text-center ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {oils.map((oil, index) => (
                    <tr key={index} className={`${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50'} transition-colors`}>
                      <td className="p-2">
                        <select
                          value={oil.name}
                          onChange={(e) => handleChange(index, "name", e.target.value)}
                          className={`w-full p-1 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                        >
                          <option value="">Select Oil</option>
                          {uniqueOils.map((oilName) => (
                            <option key={oilName} value={oilName}>{oilName}</option>
                          ))}
                        </select>
                        {oil.name && (
                          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1 italic`}>
                            {oilDescriptions[oil.name]}
                          </div>
                        )}
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          placeholder="%"
                          value={oil.percent}
                          onChange={(e) => handleChange(index, "percent", e.target.value)}
                          className={`w-full p-1 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded focus:ring-2 focus:ring-blue-500 focus:outline-none text-center`}
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          placeholder={units}
                          value={oil.weightGrams ? gramsToDisplayUnit(parseFloat(oil.weightGrams), units).toFixed(2) : ""}
                          onChange={(e) => handleChange(index, "weight", e.target.value)}
                          className={`w-full p-1 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded focus:ring-2 focus:ring-blue-500 focus:outline-none text-center`}
                        />
                      </td>
                      <td className="p-2">
                        <input
                          type="number"
                          placeholder="SAP"
                          value={oil.sap}
                          onChange={(e) => handleChange(index, "sap", e.target.value)}
                          step="0.001"
                          className={`w-full p-1 border ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300'} rounded focus:ring-2 focus:ring-blue-500 focus:outline-none text-center`}
                        />
                        {oil.name && (
                          <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} mt-1 text-center`}>
                            Default: {sapValues[oil.name]}
                          </div>
                        )}
                      </td>
                      <td className="p-2 text-center">
                        <button
                          onClick={() => handleRemoveOil(index)}
                          className={`${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-500 hover:text-red-700'} transition-colors`}
                          disabled={oils.length === 1}
                        >
                          <Trash2 size={16} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-between mt-4">
              <button
                onClick={handleAddOil}
                className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-lg hover:shadow-md transition-all flex items-center`}
              >
                <Plus size={16} className="mr-1" /> Add Oil
              </button>
            </div>
          </div>
        )}
      </div>
      
      {/* Additives Information Card */}
      <div className={`mb-4 p-4 rounded-lg shadow ${darkMode ? 'bg-gray-700' : 'bg-white'} transition-colors`}>
        <button 
          onClick={() => setAdditivesOpen(!additivesOpen)}
          className="w-full flex items-center justify-between"
        >
          <h2 className={`text-lg font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'} flex items-center`}>
            <Plus size={18} className="mr-2" /> Additives Reference
          </h2>
          {additivesOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
        
        {additivesOpen && (
          <div className="mt-3">
            <div className={`mb-3 p-2 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-blue-50'}`}>
              <p className="font-medium">For your current batch size ({gramsToDisplayUnit(batchSizeGrams, units).toFixed(2)} {units}):</p>
              <p className={`text-xs ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Calculations based on oil weight ratios
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className={`${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                    <th className={`p-2 text-left border-b ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Additive Type</th>
                    <th className={`p-2 text-left border-b ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Recommended Amount</th>
                    <th className={`p-2 text-left border-b ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className={`${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className={`p-2 border-b ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                      <span className="font-medium">Herbal powders</span>
                      <div className={`text-xs italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>bay leaf, neem, moringa</div>
                    </td>
                    <td className={`p-2 border-b ${darkMode ? 'border-gray-500' : 'border-gray-300'} font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      1-3 tsp
                    </td>
                    <td className={`p-2 border-b ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Disperse in oil first</td>
                  </tr>
                  <tr className={`${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className={`p-2 border-b ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>
                      <span className="font-medium">Clays</span>
                      <div className={`text-xs italic ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>kaolin, bentonite</div>
                    </td>
                    <td className={`p-2 border-b ${darkMode ? 'border-gray-500' : 'border-gray-300'} font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      1-2 tsp
                    </td>
                    <td className={`p-2 border-b ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Helps with slip, color</td>
                  </tr>
                  <tr className={`${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50'} transition-colors`}>
                    <td className={`p-2`}>
                      <span className="font-medium">Essential oils</span>
                    </td>
                    <td className={`p-2 font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                      1-3% of oils
                    </td>
                    <td className="p-2">Use calculator below for safety</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
      
      {/* Essential Oils Section */}
      <div className={`mb-4 p-4 rounded-lg shadow ${darkMode ? 'bg-gray-700' : 'bg-white'} transition-colors`}>
        <button 
          onClick={() => setEssentialOilsOpen(!essentialOilsOpen)}
          className="w-full flex items-center justify-between"
        >
          <h2 className={`text-lg font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'} flex items-center`}>
            <Plus size={18} className="mr-2" /> Essential Oils & Fragrances
          </h2>
          {essentialOilsOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </button>
        
        {essentialOilsOpen && (
          <div className="mt-3">
            {calcResults && (
              <div className={`mb-3 p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-blue-50'}`}>
                <p className="font-medium">
                  Total Essential Oil Capacity: {gramsToDisplayUnit(calculateTotalEssentialOilAmount, units).toFixed(2)} {units}
                </p>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Based on your current essential oil selections • Total oil weight: {calcResults.totalOilWeight.toFixed(2)} {units}
                </p>
              </div>
            )}
            
            {essentialOils.length === 0 && (
              <div className={`mb-4 p-3 rounded-lg ${darkMode ? 'bg-gray-600' : 'bg-gray-50'}`}>
                <h4 className="font-medium mb-2">Professional Essential Oil Planning</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-2`}>
                  Add essential oils with confidence using our safety database with recommended usage rates.
                </p>
              </div>
            )}
            
            {essentialOils.length > 0 && (
              <div className="overflow-x-auto mb-4">
                <table className="w-full border-collapse border rounded-lg">
                  <thead>
                    <tr className={`${darkMode ? 'bg-gray-600' : 'bg-gray-100'}`}>
                      <th className={`p-2 text-left border-b ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Essential Oil</th>
                      <th className={`p-2 text-center border-b ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Usage Rate (%)</th>
                      <th className={`p-2 text-center border-b ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Amount ({units})</th>
                      <th className={`p-2 text-center border-b ${darkMode ? 'border-gray-500' : 'border-gray-300'}`}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {essentialOils.map((eo, index) => (
                      <tr key={index} className={`${darkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-50'} transition-colors`}>
                        <td className="p-2">
                          <select
                            value={eo.name}
                            onChange={(e) => handleEssentialOilChange(index, "name", e.target.value)}
                            className={`w-full p-1 mb-1 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded focus:ring-2 focus:ring-blue-500 focus:outline-none`}
                          >
                            <option value="">Select Essential Oil</option>
                            {Object.keys(essentialOilsData).map((oilName) => (
                              <option key={oilName} value={oilName}>{oilName}</option>
                            ))}
                          </select>
                          {eo.name && essentialOilsData[eo.name] && (
                            <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} italic`}>
                              Max: {essentialOilsData[eo.name].maxUsage}% • {essentialOilsData[eo.name].category}
                            </div>
                          )}
                        </td>
                        <td className="p-2">
                          <input
                            type="number"
                            placeholder="Rate"
                            value={eo.usageRate}
                            onChange={(e) => handleEssentialOilChange(index, "usageRate", e.target.value)}
                            step="0.1"
                            max={eo.name && essentialOilsData[eo.name] ? essentialOilsData[eo.name].maxUsage : 3}
                            className={`w-full p-1 border ${darkMode ? 'border-gray-600 bg-gray-700 text-white' : 'border-gray-300 bg-white'} rounded focus:ring-2 focus:ring-blue-500 focus:outline-none text-center`}
                          />
                          {eo.name && essentialOilsData[eo.name] && parseFloat(eo.usageRate || 0) > essentialOilsData[eo.name].maxUsage && (
                            <div className="text-xs text-yellow-500 mt-1">
                              Exceeds max safe usage ({essentialOilsData[eo.name].maxUsage}%)
                            </div>
                          )}
                        </td>
                        <td className="p-2 text-center">
                          <span className={`font-medium ${darkMode ? 'text-green-400' : 'text-green-600'}`}>
                            {eo.amount || '0.00'}
                          </span>
                        </td>
                        <td className="p-2 text-center">
                          <button
                            onClick={() => handleRemoveEssentialOil(index)}
                            className={`${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-500 hover:text-red-700'} transition-colors`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
            
            <div className="flex justify-between items-center">
              <button
                onClick={handleAddEssentialOil}
                className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'} text-white px-4 py-2 rounded-lg hover:shadow-md transition-all flex items-center`}
              >
                <Plus size={16} className="mr-1" /> Add Essential Oil
              </button>
              
              {essentialOils.length > 0 && calcResults && (
                <div className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Total: {((calculateTotalEssentialOilAmount / calculateTotalOilWeight()) * 100).toFixed(2)}% of oil weight
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      
      <div className="flex justify-end mb-6">
        <button
          onClick={handleResetButtonClick}
          className={`${darkMode ? 'bg-red-600 hover:bg-red-700' : 'bg-red-600 hover:bg-red-700'} text-white px-4 py-2 rounded-lg hover:shadow-md transition-all flex items-center`}
        >
          <Trash2 size={16} className="mr-1" /> Reset Form
        </button>
      </div>
      
      {/* Results Section */}
      {calcResults && (
        <div className={`${darkMode ? 'bg-gray-700 border-gray-600' : 'bg-white border-gray-200'} p-6 rounded-xl shadow-lg border mt-8 transition-colors`}>
          
          <div className={`text-center mb-6 pb-4 border-b ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>
            <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>
              🧼 {recipeName}
            </h2>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                {gramsToDisplayUnit(batchSizeGrams, units).toFixed(1)} {units} batch
              </span>
              <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>
                {superfat}% superfat
              </span>
              <span className={`px-3 py-1 rounded-full ${darkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}>
                {calcResults.lyeConcentration.toFixed(1)}% lye concentration
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 border border-gray-600' : 'bg-blue-50 border border-blue-200'} relative`}>
              <div className="flex items-center mb-3">
                <div className={`w-3 h-3 rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-600'} mr-2`}></div>
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}>Base Oils</h3>
              </div>
              <div className={`text-2xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                {calcResults.totalOilWeight.toFixed(1)} {units}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {oils.filter(oil => oil.name).length} oil{oils.filter(oil => oil.name).length !== 1 ? 's' : ''} blended
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 border border-red-600' : 'bg-red-50 border border-red-200'} relative`}>
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 rounded-full bg-red-600 mr-2"></div>
                <h3 className="text-lg font-semibold text-red-600">Lye (NaOH)</h3>
                {lyePurity < 100 && (
                  <span className={`ml-2 text-xs px-2 py-1 rounded ${darkMode ? 'bg-yellow-900 text-yellow-200' : 'bg-yellow-100 text-yellow-800'}`}>
                    {lyePurity}% pure
                  </span>
                )}
              </div>
              <div className="text-2xl font-bold mb-1 text-red-600">
                {calcResults.actualLye.toFixed(2)} {units}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {Math.abs(calcResults.actualLye - calcResults.pureLye) > 0.01 ? 
                  `+${(calcResults.actualLye - calcResults.pureLye).toFixed(2)} ${units} for purity` : 
                  'No purity adjustment needed'
                }
              </div>
            </div>

            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800 border border-cyan-600' : 'bg-cyan-50 border border-cyan-200'} relative`}>
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 rounded-full bg-cyan-600 mr-2"></div>
                <h3 className={`text-lg font-semibold ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>Water</h3>
                {calcResults.lyeConcentration > 40 && (
                  <span className="ml-2 text-xs px-2 py-1 rounded bg-yellow-500 text-yellow-900">
                    ⚠️ High conc.
                  </span>
                )}
              </div>
              <div className={`text-2xl font-bold mb-1 ${darkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>
                {calcResults.totalWater.toFixed(1)} {units}
              </div>
              <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {waterCalcMethod === "ratio" ? `${waterRatio}:1 ratio` : `${waterDiscount}% discount`} • {calcResults.effectiveRatio.toFixed(1)}:1 effective
              </div>
            </div>
          </div>

          {soapQualities && (
            <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} mb-6`}>
              <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} text-center`}>
                📊 Soap Quality Profile
              </h3>
              
              <div className="space-y-3">
                {Object.entries(soapQualities).map(([quality, value]) => {
                  const qualityInfo = {
                    hardness: { color: 'blue', label: 'Hardness', target: '3-5', icon: '🧱' },
                    cleansing: { color: 'green', label: 'Cleansing', target: '1-3', icon: '🧽' },
                    conditioning: { color: 'purple', label: 'Conditioning', target: '3-5', icon: '💧' },
                    bubbly: { color: 'yellow', label: 'Bubbly Lather', target: '2-5', icon: '🫧' },
                    creamy: { color: 'pink', label: 'Creamy Lather', target: '2-5', icon: '🥛' }
                  };
                  
                  const info = qualityInfo[quality];
                  const percentage = (value / 5) * 100;
                  const colorClasses = {
                    blue: 'bg-blue-500',
                    green: 'bg-green-500', 
                    purple: 'bg-purple-500',
                    yellow: 'bg-yellow-500',
                    pink: 'bg-pink-500'
                  };
                  
                  return (
                    <div key={quality} className="flex items-center space-x-3">
                      <div className="flex items-center min-w-0 flex-1">
                        <span className="text-lg mr-2">{info.icon}</span>
                        <div className="min-w-0 flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                              {info.label}
                            </span>
                            <span className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                              {value.toFixed(1)}/5
                            </span>
                          </div>
                          <div className={`w-full bg-gray-300 rounded-full h-2.5 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'}`}>
                            <div 
                              className={`h-2.5 rounded-full transition-all duration-300 ${colorClasses[info.color]}`}
                              style={{ width: `${Math.max(percentage, 4)}%` }}
                            ></div>
                          </div>
                          <div className={`text-xs mt-1 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                            Target: {info.target}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          <div className={`p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} mb-6`}>
            <h3 className={`text-lg font-semibold mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'} text-center`}>
              🌿 Complete Composition Breakdown
            </h3>
            
            <div className="space-y-3">
              {/* Base Oils Section */}
              <div className={`mb-4 ${oils.filter(oil => oil.name).length > 0 ? 'pb-3 border-b border-gray-300' : ''} ${darkMode ? 'border-gray-600' : 'border-gray-300'}`}>
                <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-blue-400' : 'text-blue-700'} flex items-center`}>
                  🛢️ Base Oils ({oils.filter(oil => oil.name).length} oil{oils.filter(oil => oil.name).length !== 1 ? 's' : ''})
                </h4>
                {oils.filter(oil => oil.name).map((oil, index) => {
                  const percentage = parseFloat(oil.percent || 0);
                  const weight = oil.weightGrams ? gramsToDisplayUnit(parseFloat(oil.weightGrams), units) : 0;
                  
                  return (
                    <div key={`base-${index}`} className={`flex items-center justify-between p-3 rounded-lg ${darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'} mb-2`}>
                      <div className="flex items-center min-w-0 flex-1">
                        <div className="w-3 h-3 rounded-full mr-3" style={{backgroundColor: `hsl(${index * 137.5 % 360}, 70%, 50%)`}}></div>
                        <div className="min-w-0 flex-1">
                          <div className={`font-medium ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                            {oil.name}
                          </div>
                          <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                            {percentage.toFixed(1)}% of recipe
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`font-bold ${darkMode ? 'text-white' : 'text-gray-800'}`}>
                          {weight.toFixed(1)} {units}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Essential Oils Section */}
              {essentialOils.filter(eo => eo.name).length > 0 && (
                <div>
                  <h4 className={`text-sm font-semibold mb-2 ${darkMode ? 'text-purple-400' : 'text-purple-700'} flex items-center`}>
                    🌸 Essential Oils ({essentialOils.filter(eo => eo.name).length} oil{essentialOils.filter(eo => eo.name).length !== 1 ? 's' : ''})
                  </h4>
                  {essentialOils.filter(eo => eo.name).map((eo, index) => {
                    const usageRate = parseFloat(eo.usageRate || 0);
                    const amount = parseFloat(eo.amount || 0);
                    const totalOilWeight = calcResults ? calcResults.totalOilWeight : 0;
                    const percentageOfTotal = totalOilWeight > 0 ? (gramsToDisplayUnit(displayUnitToGrams(amount, units), 'g') / gramsToDisplayUnit(displayUnitToGrams(totalOilWeight, units), 'g')) * 100 : 0;
                    
                    return (
                      <div key={`eo-${index}`} className={`flex items-center justify-between p-3 rounded-lg ${darkMode ? 'bg-purple-900/20 border border-purple-600/50' : 'bg-purple-50 border border-purple-200'} mb-2`}>
                        <div className="flex items-center min-w-0 flex-1">
                          <div className="w-3 h-3 rounded-full mr-3" style={{backgroundColor: `hsl(${280 + index * 30}, 70%, 50%)`}}></div>
                          <div className="min-w-0 flex-1">
                            <div className={`font-medium ${darkMode ? 'text-purple-200' : 'text-purple-800'} flex items-center`}>
                              {eo.name}
                              {essentialOilsData[eo.name] && (
                                <span className={`ml-2 text-xs px-2 py-1 rounded ${darkMode ? 'bg-purple-800 text-purple-200' : 'bg-purple-100 text-purple-700'}`}>
                                  {essentialOilsData[eo.name].category}
                                </span>
                              )}
                            </div>
                            <div className={`text-sm ${darkMode ? 'text-purple-300' : 'text-purple-600'}`}>
                              {usageRate.toFixed(1)}% of oil weight • {percentageOfTotal.toFixed(3)}% of total recipe
                            </div>
                            {essentialOilsData[eo.name] && usageRate > essentialOilsData[eo.name].maxUsage && (
                              <div className="text-xs text-yellow-500 font-medium">
                                ⚠️ Exceeds recommended max ({essentialOilsData[eo.name].maxUsage}%)
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className={`font-bold ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
                            {amount.toFixed(2)} {units}
                          </div>
                          <div className={`text-xs ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                            Essential
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Total Essential Oil Summary */}
                  <div className={`mt-3 p-2 rounded-lg ${darkMode ? 'bg-purple-900/30 border border-purple-600/30' : 'bg-purple-100 border border-purple-300'}`}>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm font-medium ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
                        Total Essential Oils:
                      </span>
                      <div className="text-right">
                        <div className={`font-bold ${darkMode ? 'text-purple-200' : 'text-purple-800'}`}>
                          {gramsToDisplayUnit(calculateTotalEssentialOilAmount, units).toFixed(2)} {units}
                        </div>
                        <div className={`text-xs ${darkMode ? 'text-purple-400' : 'text-purple-600'}`}>
                          {calcResults ? ((calculateTotalEssentialOilAmount / gramsToDisplayUnit(displayUnitToGrams(calcResults.totalOilWeight, units), 'g')) * 100).toFixed(2) : '0.00'}% of oil weight
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Show message if no essential oils */}
              {essentialOils.filter(eo => eo.name).length === 0 && (
                <div className={`p-3 rounded-lg ${darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-gray-100 border border-gray-300'} text-center`}>
                  <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    💡 Add essential oils above to see them in this breakdown
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Safety Notes */}
          <div className={`p-4 rounded-lg ${darkMode ? 'bg-red-900 border border-red-600' : 'bg-red-50 border border-red-200'} mb-6`}>
            <h3 className="text-lg font-semibold mb-3 text-red-600 text-center flex items-center justify-center">
              ⚠️ Safety Reminders
            </h3>
            <ul className={`text-sm space-y-2 ${darkMode ? 'text-red-200' : 'text-red-800'}`}>
              <li className="flex items-start">
                <span className="mr-2">🥽</span>
                Always wear protective gear (goggles, gloves, long sleeves)
              </li>
              <li className="flex items-start">
                <span className="mr-2">🌡️</span>
                {calcResults.lyeConcentration > 40 ? 
                  `High lye concentration (${calcResults.lyeConcentration.toFixed(1)}%) - mix carefully, solution will get very hot` :
                  'Mix lye solution slowly and carefully - it will get hot'
                }
              </li>
              <li className="flex items-start">
                <span className="mr-2">📋</span>
                Verify lye purity on product label ({lyePurity}% used in calculations)
              </li>
              {waterCalcMethod === "discount" && waterDiscount > 0 && (
                <li className="flex items-start">
                  <span className="mr-2">⚡</span>
                  Water discount used - expect faster trace and quicker saponification
                </li>
              )}
              {essentialOils.length > 0 && (
                <li className="flex items-start">
                  <span className="mr-2">🌸</span>
                  Essential oil usage rates follow safety guidelines - always patch test
                </li>
              )}
            </ul>
          </div>

          {/* Actions */}
          <div className="flex justify-center gap-4">
            <button
              onClick={handleExportRecipe}
              className={`${darkMode ? 'bg-green-600 hover:bg-green-700' : 'bg-green-600 hover:bg-green-700'} 
                text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all flex items-center font-semibold
                ${hasValidationErrors ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={hasValidationErrors}
            >
              📋 Copy Recipe Text
            </button>
            <button
              onClick={handleExportPDF}
              className={`${darkMode ? 'bg-purple-600 hover:bg-purple-700' : 'bg-purple-600 hover:bg-purple-700'} 
                text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all flex items-center font-semibold
                ${hasValidationErrors ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={hasValidationErrors}
            >
              📄 Generate PDF Card
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SoapCalculator;